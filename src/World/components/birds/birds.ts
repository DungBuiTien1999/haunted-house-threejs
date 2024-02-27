import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.ts";
import type GUI from "lil-gui";

const factorScaleBird = 0.01;

async function loadBirds(gui: GUI) {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync("/assets/models/Parrot.glb"),
    loader.loadAsync("/assets/models/Flamingo.glb"),
    loader.loadAsync("/assets/models/Stork.glb"),
  ]);

  const parrot = setupModel({
    data: parrotData,
    gui: gui.addFolder("Parrot"),
  }).model;
  parrot.position.set(0, 0, 2.5);
  parrot.scale.multiplyScalar(factorScaleBird);

  const flamingo = setupModel({
    data: flamingoData,
    gui: gui.addFolder("Flamingo"),
    delay: 2
  }).model;
  flamingo.position.set(7.5, 0, -10);
  flamingo.scale.multiplyScalar(factorScaleBird);

  const stork = setupModel({
    data: storkData,
    gui: gui.addFolder("Stork"),
    delay: 4
  }).model;
  stork.position.set(0, -2.5, -10);
  stork.scale.multiplyScalar(factorScaleBird);

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
