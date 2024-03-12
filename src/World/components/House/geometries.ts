import {
  BoxGeometry,
  ConeGeometry,
  PlaneGeometry,
  SphereGeometry,
} from "three";

function createGeometries() {
  const wallGeo = new BoxGeometry(4, 2.5, 4);

  const roofGeo = new ConeGeometry(3.5, 1, 4);

  const doorGeo = new PlaneGeometry(2.2, 2.2, 100, 100);

  const bushGeo = new SphereGeometry(1, 16, 16);

  const chimneyGeo = new BoxGeometry(0.5, 1.5, 0.5);

  const graveGeo = new BoxGeometry(0.6, 0.8, 0.2);

  const floorGeo = new PlaneGeometry(20, 20);

  return { wallGeo, roofGeo, doorGeo, bushGeo, chimneyGeo, graveGeo, floorGeo };
}

export { createGeometries };
