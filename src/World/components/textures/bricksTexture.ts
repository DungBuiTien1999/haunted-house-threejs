import { TextureLoader } from "three";
import { createLoadingManager } from "./loadingManager";

export function createBricksTexture() {
  const { loadingManager } = createLoadingManager();
  const textureLoader = new TextureLoader(loadingManager);

  const bricksColorTexture = textureLoader.load(
    "/assets/textures/bricks/color.jpg"
  );
  const bricksAmbientOcclusionTexture = textureLoader.load(
    "/assets/textures/bricks/ambientOcclusion.jpg"
  );
  const bricksNormalTexture = textureLoader.load(
    "/assets/textures/bricks/normal.jpg"
  );
  const bricksRoughnessTexture = textureLoader.load(
    "/assets/textures/bricks/roughness.jpg"
  );

  return {
    bricksColorTexture,
    bricksAmbientOcclusionTexture,
    bricksNormalTexture,
    bricksRoughnessTexture,
  };
}
