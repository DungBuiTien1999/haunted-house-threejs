import { loadBirds } from "./components/birds/birds.ts";
import { createCamera } from "./components/camera.ts";
import { createLights } from "./components/lights.ts";
import { createScene } from "./components/scene.ts";

import { createControls } from "./systems/controls.ts";
import { createRenderer } from "./systems/renderer.ts";
import { Resizer } from "./systems/Resizer.ts";
import { Loop } from "./systems/Loop.ts";
import type { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
// import { createAxesHelper, createGridHelper } from "./components/helpers.ts";

import GUI from "lil-gui";

const gui = new GUI({ title: "🐞 Debug GUI", width: 300 });

let camera: PerspectiveCamera;
let controls: OrbitControls;
let renderer: WebGLRenderer;
let scene: Scene;
let loop: Loop;

class World {
  constructor(container: Element) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);

    // add the helpers to the scene
    // scene.add(createAxesHelper(), createGridHelper());
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds(
      gui.addFolder("Objects")
    );

    // move the target to the center of the front bird
    controls.target.copy(parrot.position);
    loop.updatables.push(parrot, flamingo, stork);

    scene.add(parrot, flamingo, stork);

    // persist GUI state in local storage on changes
    gui.onFinishChange(() => {
      const guiState = gui.save();
      localStorage.setItem("guiState", JSON.stringify(guiState));
    });

    // load GUI state if available in local storage
    const guiState = localStorage.getItem("guiState");
    if (guiState) gui.load(JSON.parse(guiState));

    // reset GUI state button
    const resetGui = () => {
      localStorage.removeItem("guiState");
      gui.reset();
    };
    gui.add({ resetGui }, "resetGui").name("RESET");
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
