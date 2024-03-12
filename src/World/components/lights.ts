import type GUI from "lil-gui";
import { AmbientLight, DirectionalLight, PointLight } from "three";

function createLights(gui: GUI) {
  // Ambient light
  // const ambientLight = new AmbientLight("#ffffff", 0.5);
  const ambientLight = new AmbientLight("#b9d5ff", 0.12);
  gui
    .add(ambientLight, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name("ambient intensity");

  // Directional light
  // const moonLight = new DirectionalLight("#ffffff", 0.5);
  const moonLight = new DirectionalLight("#b9d5ff", 0.12);
  moonLight.castShadow = true;
  moonLight.position.set(4, 5, -2);
  gui
    .add(moonLight, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name("moon intensity");
  gui.add(moonLight.position, "x").min(-5).max(5).step(0.001);
  gui.add(moonLight.position, "y").min(-5).max(5).step(0.001);
  gui.add(moonLight.position, "z").min(-5).max(5).step(0.001);

  // Door light
  const doorLight = new PointLight("#ff7d46", 1, 7);
  doorLight.castShadow = true;
  doorLight.position.set(0, 2.2, 2.7);

  // Ghost
  const ghost1 = new PointLight("#ff00ff", 2, 3);
  ghost1.castShadow = true;
  ghost1.shadow.mapSize.width = 256;
  ghost1.shadow.mapSize.height = 256;
  ghost1.shadow.camera.far = 7;

  (ghost1 as any).tick = (_: number, elapsedTime: number) => {
    const ghost1Angle = elapsedTime * 0.5;
    ghost1.position.x = Math.cos(ghost1Angle) * 4;
    ghost1.position.z = Math.sin(ghost1Angle) * 4;
    ghost1.position.y = Math.sin(elapsedTime * 3);
  };

  const ghost2 = new PointLight("#ff00ff", 2, 3);
  ghost2.castShadow = true;
  ghost2.shadow.mapSize.width = 256;
  ghost2.shadow.mapSize.height = 256;
  ghost2.shadow.camera.far = 7;

  (ghost2 as any).tick = (_: number, elapsedTime: number) => {
    const ghost2Angle = -elapsedTime * 0.32;
    ghost2.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  };

  const ghost3 = new PointLight("#ff00ff", 2, 3);
  ghost3.castShadow = true;
  ghost3.shadow.mapSize.width = 256;
  ghost3.shadow.mapSize.height = 256;
  ghost3.shadow.camera.far = 7;

  (ghost3 as any).tick = (_: number, elapsedTime: number) => {
    const ghost3Angle = -elapsedTime * 0.18;
    ghost3.position.x =
      Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3.position.z =
      Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  };

  return { ambientLight, moonLight, doorLight, ghost1, ghost2, ghost3 };
}

export { createLights };
