<template>
  <div id="app">
    <notifications
      group="toast-error"
      position="top right"
      :width="emitterWidth"
    >
      <template slot="body" slot-scope="props">
        <Notification :props="props" />
      </template>
    </notifications>
    <notifications
      group="toast-success"
      position="top right"
      :width="emitterWidth"
    >
      <template slot="body" slot-scope="props">
        <Notification :props="props" />
      </template>
    </notifications>
    <div class="nav">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/todo">Todo</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import emitter from "tiny-emitter/instance";
import Notification from "Common/notification";

export default {
  components: { Notification },
  data: () => ({
    emitterSpeed: 800,
    emitterWidth: 400
  }),
  created() {
    emitter.on("error", response => {
      this.$notify({
        group: "toast-error",
        type: "error",
        title: response.title,
        text: this.beautifyMessage(response.text),
        speed: this.emitterSpeed,
        ignoreDuplicates: true
      });
    });
    emitter.on("success", response => {
      this.$notify({
        group: "toast-success",
        type: "success",
        title: response.title,
        text: this.beautifyMessage(response.text),
        speed: this.emitterSpeed,
        ignoreDuplicates: true
      });
    });
  },
  methods: {
    beautifyMessage(text) {
      return text[0].toUpperCase() + text.slice(1);
    }
  }
};
</script>

<style lang="scss">
.nav {
  text-align: center;
  padding: 30px;
  color: $white-color;

  &__link {
    @include font(18px, $green-color, 600);
    padding: 0 6px 2px;
    letter-spacing: 3px;
    text-decoration: none;
    transition: color $transition-fast;

    &.router-link-exact-active {
      color: $white-color;
      border-bottom: 1px solid $white-color;
    }

    & + & {
      border-left: 1px solid $white-color;
    }
  }
}
</style>
