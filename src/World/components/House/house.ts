import { Group } from "three";
import type { Mesh } from "three";

import type GUI from "lil-gui";
import { createMeshes } from "./mesh";

class House extends Group {
  #meshes: ReturnType<() => { houseGroup: Mesh | Group }>;
  constructor(gui: GUI, updatables: any[]) {
    super();

    this.#meshes = createMeshes(gui, updatables);
    this.add(this.#meshes.houseGroup);
  }
}

export { House };
