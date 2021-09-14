import { Clock } from "three";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer, resizer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
    this.resizer = resizer;
  }

  tick() {
    const delta = clock.getDelta();

    this.updatables.map((object) => object.tick(delta));
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // resize
      this.resizer.resize();

      // do one tick
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
      //console.log("rendering", this.updatables);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export { Loop };
