import { PerspectiveCamera } from "three";

function createCamera() {
  // Create a camera
  const fov = 35; // AKA Field of View
  const aspect = 1;
  const near = 1; // the near clipping plane
  const far = 150; // the far clipping plane

  const camera = new PerspectiveCamera(fov, aspect, near, far);
  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene

  camera.position.set(0, 0, 15);

  return camera;
}

export { createCamera };
