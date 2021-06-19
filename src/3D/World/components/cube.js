import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
} from "three";

function createMaterial() {
  // Create teture loader
  const textureLoader = new TextureLoader();

  // load texture
  const map = textureLoader.load("./textures/harshbricks-albedo.png");
  const normalMap = textureLoader.load("./textures/harshbricks-normal.png");
  const roughness = textureLoader.load("./textures/harshbricks-roughness.png");
  const metalnessMap = textureLoader.load(
    "./textures/harshbricks-metalness.png"
  );
  const ao2 = textureLoader.load("./textures/harshbricks-ao2.png");
  const bumpMap = textureLoader.load("./textures/harshbricks-height5-16.png");

  const material = new MeshStandardMaterial({
    map: map,
    normalMap: normalMap,
    roughness: roughness,
    metalnessMap: metalnessMap,
    aoMap: ao2,
    bumpMap: bumpMap,
  });

  return material;
}

function createCube() {
  const geometry = new BoxBufferGeometry(10, 10, 10);

  const material = createMaterial();

  const cube = new Mesh(geometry, material);

  cube.position.set(0, 0, 50);

  const degreesToRadians = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.x += degreesToRadians * delta;
    cube.rotation.y += degreesToRadians * delta;
  };

  return cube;
}

export { createCube };
