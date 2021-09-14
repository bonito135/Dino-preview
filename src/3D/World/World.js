import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createTRex } from "./components/TRex.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls";

let camera;
let scene;
let renderer;
let resizer;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    resizer = new Resizer(container, camera, renderer, scene);
    loop = new Loop(camera, scene, renderer, resizer);
    controls = createControls(camera, renderer.domElement);

    // Objects
    const { directionalLight, ambientLight, hemisphereLight } = createLights();

    resizer.resize();

    container.append(renderer.domElement);

    controls.addEventListener("change", () => {
      this.render();
    });

    // Loop
    loop.updatables.push(controls);

    // Scene
    scene.add(ambientLight, directionalLight, hemisphereLight);
  }

  async init() {
    const { TRex } = await createTRex();

    TRex.position.set(0, -3, 0);

    scene.add(TRex);

    loop.updatables.push(TRex);

    controls.target.set(0, 0, 0);
  }

  render() {
    renderer.render(scene, camera);
  }

  resize() {
    resizer.resize();
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
