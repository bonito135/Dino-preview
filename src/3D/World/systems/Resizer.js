class Resizer {
  constructor(container, camera, renderer) {
    this.resize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;

      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
  }
}

export { Resizer };
