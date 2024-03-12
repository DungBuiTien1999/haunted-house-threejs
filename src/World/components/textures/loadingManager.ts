import { LoadingManager } from "three";

function createLoadingManager() {
  const loadingManager = new LoadingManager();
  loadingManager.onStart = () => {
    console.log("loading started");
  };
  loadingManager.onLoad = () => {
    console.log("loading finished");
  };
  loadingManager.onProgress = () => {
    console.log("loading progressing");
  };
  loadingManager.onError = () => {
    console.log("loading error");
  };

  return { loadingManager };
}

export { createLoadingManager };
