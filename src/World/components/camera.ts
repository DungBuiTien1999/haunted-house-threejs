import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(75, 1, 0.1, 100);

  camera.position.set(4, 2, 5);

  return camera;
}

export { createCamera };
