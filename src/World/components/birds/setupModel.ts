import type GUI from "lil-gui";
import { AnimationClip, AnimationMixer, VectorKeyframeTrack } from "three";

let debugObject = {
  effectWeight: 1,
};

function createCustomClip() {
  const positionKF = new VectorKeyframeTrack(
    ".position",
    [0, 5, 6],
    [0, 0, -10, 2, 0, 3, 2, 0, 6]
  );

  const scaleKF = new VectorKeyframeTrack(
    ".scale",
    [0, 2, 4, 6],
    [0, 0, 0, 0.01, 0.01, 0.01, 0.015, 0.015, 0.015, 0.02, 0.02, 0.02]
  );

  const moveClip = new AnimationClip("move-bird", -1, [positionKF, scaleKF]);
  return moveClip;
}

type SetupModelType = {
  data: any;
  delay?: number;
  gui: GUI;
};

function setupModel({ data, gui, delay = 0 }: SetupModelType) {
  const model = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  const action2 = mixer.clipAction(createCustomClip());

  action.startAt(delay).play();
  action2.startAt(delay).play();

  model.tick = (delta: number) => mixer.update(delta);
  gui
    .add(debugObject, "effectWeight")
    .min(0)
    .max(1)
    .step(0.001)
    .onChange((v: number) => {
      action.setEffectiveWeight(v);
    })
    .name("Weight");

  gui.add(action, "timeScale").min(0).max(3).step(0.1);

  gui.close();

  return { model, action };
}

export { setupModel };
