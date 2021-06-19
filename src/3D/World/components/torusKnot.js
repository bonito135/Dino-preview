import {
  Mesh,
  MeshStandardMaterial,
  TorusKnotGeometry,
  MathUtils,
} from "three";

function createTorusKnot() {
  //create geometry
  const geometry = new TorusKnotGeometry(10, 3, 300, 300);

  //create a standart material
  const material = new MeshStandardMaterial({ color: "purple" });

  //create Mesh with geometry and material
  const torusKnot = new Mesh(geometry, material);

  torusKnot.position.set(0, 0, 0);

  const degreesToRadians = MathUtils.degToRad(15);

  torusKnot.tick = (delta) => {
    //increase the rotation property of a knot
    torusKnot.rotation.x += degreesToRadians * delta;
    torusKnot.rotation.y += degreesToRadians * delta;
  };

  return torusKnot;
}

export { createTorusKnot };
