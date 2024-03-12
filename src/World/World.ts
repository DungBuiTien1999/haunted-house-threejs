// import { loadBirds } from "./components/birds/birds.ts";
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
import { House } from "./components/House/house.ts";
import { createFog } from "./components/fog.ts";

const gui = new GUI({ title: "🐞 Debug GUI", width: 300 });

class World {
  #camera: PerspectiveCamera;
  #controls: OrbitControls;
  #renderer: WebGLRenderer;
  #scene: Scene;
  #loop: Loop;
  constructor(container: Element) {
    this.#camera = createCamera();
    this.#renderer = createRenderer();
    this.#scene = createScene();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    container.append(this.#renderer.domElement);
    this.#controls = createControls(this.#camera, this.#renderer.domElement);

    const { ambientLight, moonLight, doorLight, ghost1, ghost2, ghost3 } =
      createLights(gui);

    const house = new House(gui, this.#loop.updatables);
    house.add(doorLight);
    this.#scene.add(house);

    this.#loop.updatables.push(this.#controls, ghost1, ghost2, ghost3);
    this.#scene.add(ambientLight, moonLight, ghost1, ghost2, ghost3);

    this.#scene.fog = createFog();

    const resizer = new Resizer(container, this.#camera, this.#renderer);

    // add the helpers to the scene
    // scene.add(createAxesHelper(), createGridHelper());
  }

  async init() {
    // const { parrot, flamingo, stork } = await loadBirds(
    //   gui.addFolder("Objects")
    // );

    // move the target to the center of the front bird
    // this.#controls.target.copy(parrot.position);
    // this.#loop.updatables.push(parrot, flamingo, stork);

    // this.#scene.add(parrot, flamingo, stork);

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
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export { World };
