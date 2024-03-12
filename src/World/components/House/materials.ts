import { MeshStandardMaterial, RepeatWrapping } from "three";
import { createBricksTexture } from "../textures/bricksTexture";
import { createDoorTexture } from "../textures/doorTexture";
import { createGrassTexture } from "../textures/grassTexture";

function createMaterials() {
  const {
    bricksColorTexture,
    bricksAmbientOcclusionTexture,
    bricksNormalTexture,
    bricksRoughnessTexture,
  } = createBricksTexture();
  const {
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorColorTexture,
    doorHeightTexture,
    doorMetalnessTexture,
    doorNormalTexture,
    doorRoughnessTexture,
  } = createDoorTexture();
  const {
    grassAmbientOcclusionTexture,
    grassColorTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  } = createGrassTexture();
  const tempMaterial = new MeshStandardMaterial({ color: "white" });

  const brickMaterial = new MeshStandardMaterial({
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture,
  });

  const roofMaterial = new MeshStandardMaterial({ color: "#b35f45" });

  const doorMaterial = new MeshStandardMaterial({
    map: doorColorTexture,
    aoMap: doorAmbientOcclusionTexture,
    normalMap: doorNormalTexture,
    roughnessMap: doorRoughnessTexture,
    transparent: true,
    displacementScale: 0.1,
    displacementMap: doorHeightTexture,
    alphaMap: doorAlphaTexture,
    metalnessMap: doorMetalnessTexture,
  });

  const bushMaterial = new MeshStandardMaterial({ color: "#89c854" });

  const graveMaterial = new MeshStandardMaterial({ color: "#b2b6b1" });

  const grassMaterial = new MeshStandardMaterial({
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
  });
  grassColorTexture.repeat.set(8, 8);
  grassAmbientOcclusionTexture.repeat.set(8, 8);
  grassNormalTexture.repeat.set(8, 8);
  grassRoughnessTexture.repeat.set(8, 8);
  grassColorTexture.wrapS = RepeatWrapping;
  grassAmbientOcclusionTexture.wrapS = RepeatWrapping;
  grassNormalTexture.wrapS = RepeatWrapping;
  grassRoughnessTexture.wrapS = RepeatWrapping;

  grassColorTexture.wrapT = RepeatWrapping;
  grassAmbientOcclusionTexture.wrapT = RepeatWrapping;
  grassNormalTexture.wrapT = RepeatWrapping;
  grassRoughnessTexture.wrapT = RepeatWrapping;

  return {
    tempMaterial,
    brickMaterial,
    roofMaterial,
    doorMaterial,
    bushMaterial,
    graveMaterial,
    grassMaterial,
  };
}

export { createMaterials };
