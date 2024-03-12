import { TextureLoader } from "three";
import { createLoadingManager } from "./loadingManager";

export function createGrassTexture() {
  const { loadingManager } = createLoadingManager();
  const textureLoader = new TextureLoader(loadingManager);

  const grassColorTexture = textureLoader.load(
    "/assets/textures/grass/color.jpg"
  );
  const grassAmbientOcclusionTexture = textureLoader.load(
    "/assets/textures/grass/ambientOcclusion.jpg"
  );
  const grassNormalTexture = textureLoader.load(
    "/assets/textures/grass/normal.jpg"
  );
  const grassRoughnessTexture = textureLoader.load(
    "/assets/textures/grass/roughness.jpg"
  );

  return {
    grassColorTexture,
    grassAmbientOcclusionTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  };
}
