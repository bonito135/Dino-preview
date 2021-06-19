import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });

  //Turn the real-world-like light ( Physically correct lighting model )
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
