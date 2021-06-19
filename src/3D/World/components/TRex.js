import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./TRex/setupModel.js";

async function createTRex() {
  const loader = new GLTFLoader();

  const TRexData = await loader.loadAsync("models/t-rex.glb");

  console.log(TRexData);

  const TRex = setupModel(TRexData);

  return { TRex };
}

export { createTRex };
