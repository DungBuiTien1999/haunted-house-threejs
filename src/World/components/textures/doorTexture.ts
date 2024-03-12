import { TextureLoader } from "three";
import { createLoadingManager } from "./loadingManager";

export function createDoorTexture() {
  const { loadingManager } = createLoadingManager();
  const textureLoader = new TextureLoader(loadingManager);

  const doorColorTexture = textureLoader.load(
    "/assets/textures/door/color.jpg"
  );
  const doorAlphaTexture = textureLoader.load(
    "/assets/textures/door/alpha.jpg"
  );
  const doorAmbientOcclusionTexture = textureLoader.load(
    "/assets/textures/door/ambientOcclusion.jpg"
  );
  const doorHeightTexture = textureLoader.load(
    "/assets/textures/door/height.jpg"
  );
  const doorNormalTexture = textureLoader.load(
    "/assets/textures/door/normal.jpg"
  );
  const doorMetalnessTexture = textureLoader.load(
    "/assets/textures/door/metalness.jpg"
  );
  const doorRoughnessTexture = textureLoader.load(
    "/assets/textures/door/roughness.jpg"
  );

  return {
    doorColorTexture,
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorHeightTexture,
    doorNormalTexture,
    doorMetalnessTexture,
    doorRoughnessTexture,
  };
}
