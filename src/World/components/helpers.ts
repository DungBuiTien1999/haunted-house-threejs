import { AxesHelper, GridHelper, PointLightHelper } from "three";
import type { PointLight } from "three";

function createAxesHelper() {
  const axesHelper = new AxesHelper(4);
  return axesHelper;
}

function createPointLightHelper(pointLight: PointLight) {
  const pointLightHelper = new PointLightHelper(
    pointLight,
    undefined,
    "orange"
  );
  return pointLightHelper;
}

function createGridHelper() {
  const gridHelper = new GridHelper(20, 20, "teal", "darkgray");
  gridHelper.position.y = -0.01;
  return gridHelper;
}

export { createAxesHelper, createGridHelper, createPointLightHelper };
