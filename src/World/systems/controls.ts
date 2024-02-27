import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
  const controls = new OrbitControls(camera, canvas) as any;

  controls.enableDamping = true;
  
//   controls.autoRotate = true;

  // controls.target.y = 1;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
