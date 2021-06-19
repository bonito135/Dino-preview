import { AnimationMixer } from "three";

function setupModel(data) {
  const model = data.scene.children[0];
  const clip = data.animations[4];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.setEffectiveTimeScale(0.8).play();

  model.tick = (delta) => {
    mixer.update(delta);
  };

  return model;
}

export { setupModel };
