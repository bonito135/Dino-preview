import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

function createLights() {
  // Create directional light
  const directionalLight = new DirectionalLight("white", 5);

  const ambientLight = new AmbientLight("white", 1);

  const hemisphereLight = new HemisphereLight(
    "white", // bright sky color
    "darkslategrey", // dim ground color
    2 // intensity
  );

  // Move directional light
  directionalLight.position.set(200, 200, 150);

  return { directionalLight, ambientLight, hemisphereLight };
}

export { createLights };
