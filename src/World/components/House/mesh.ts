import { Float32BufferAttribute, Group, Mesh } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";
import type GUI from "lil-gui";

function createMeshes(_gui: GUI, _updatables: any[]) {
  const { wallGeo, roofGeo, doorGeo, bushGeo, chimneyGeo, graveGeo, floorGeo } =
    createGeometries();
  const {
    brickMaterial,
    roofMaterial,
    doorMaterial,
    bushMaterial,
    graveMaterial,
    grassMaterial,
  } = createMaterials();

  //   gui.add(material, "metalness").min(0).max(1).step(0.0001).name("metalness");
  //   gui.add(material, "roughness").min(0).max(1).step(0.0001).name("roughness");

  const houseGroup = new Group();

  const walls = new Mesh(wallGeo, brickMaterial);
  walls.position.y = 1.25;
  walls.geometry.setAttribute(
    "uv2",
    new Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
  );
  walls.castShadow = true;

  const roof = new Mesh(roofGeo, roofMaterial);
  roof.rotation.y = Math.PI * 0.25;
  roof.position.y = 2.5 + 0.5;
  roof.receiveShadow = true;
  roof.castShadow = true;

  const door = new Mesh(doorGeo, doorMaterial);
  door.geometry.setAttribute(
    "uv2",
    new Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
  );
  door.position.y = 1;
  door.position.z = 2 + 0.01;

  // Bushes
  const bushes = new Group();

  const bush1 = new Mesh(bushGeo, bushMaterial);
  bush1.scale.set(0.5, 0.5, 0.5);
  bush1.position.set(0.8, 0.2, 2.2);

  const bush2 = new Mesh(bushGeo, bushMaterial);
  bush2.scale.set(0.25, 0.25, 0.25);
  bush2.position.set(1.4, 0.1, 2.1);

  const bush3 = new Mesh(bushGeo, bushMaterial);
  bush3.scale.set(0.4, 0.4, 0.4);
  bush3.position.set(-0.8, 0.1, 2.2);

  const bush4 = new Mesh(bushGeo, bushMaterial);
  bush4.scale.set(0.15, 0.15, 0.15);
  bush4.position.set(-1, 0.05, 2.6);

  bushes.add(bush1, bush2, bush3, bush4);

  const chimney = new Mesh(chimneyGeo, brickMaterial);
  chimney.geometry.setAttribute(
    "uv2",
    new Float32BufferAttribute(chimney.geometry.attributes.uv.array, 2)
  );
  chimney.position.set(-1.5, 2 + 0.5, 1);
  chimney.castShadow = true;

  // Graves
  const graves = new Group();
  for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2; // Random angle
    const radius = 4 + Math.random() * 6; // Random radius
    const x = Math.cos(angle) * radius; // Get the x position using cosinus
    const z = Math.sin(angle) * radius; // Get the z position using sinus

    // Create the mesh
    const grave = new Mesh(graveGeo, graveMaterial);

    // Position
    grave.position.set(x, 0.3, z);

    // Rotation
    grave.rotation.z = (Math.random() - 0.5) * 0.4;
    grave.rotation.y = (Math.random() - 0.5) * 0.4;

    // Add to the graves container
    grave.receiveShadow = true;
    grave.castShadow = true;
    graves.add(grave);
  }

  const floor = new Mesh(floorGeo, grassMaterial);
  floor.geometry.setAttribute(
    "uv2",
    new Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
  );
  floor.rotation.x = -Math.PI * 0.5;
  floor.position.y = 0;
  floor.receiveShadow = true;

  houseGroup.add(walls, roof, door, bushes, chimney, graves, floor);

  return { houseGroup };
}

export { createMeshes };
