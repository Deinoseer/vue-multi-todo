export default {
  created() {
    const component = this;

    window.addEventListener("keyup", e => {
      e.keyCode === 27 ? component.escKeyup() : false;
    });
  }
};
