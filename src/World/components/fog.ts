import { Fog } from "three";

function createFog() {
  const fog = new Fog("#262837", 10, 15);
  return fog;
}

export { createFog };
