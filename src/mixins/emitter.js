import emitter from "tiny-emitter/instance";

export default {
  methods: {
    emitSuccess(text) {
      emitter.emit("success", { text: text });
    },
    emitError(text) {
      emitter.emit("error", { text: text });
    }
  }
};
