<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p class="home__text">
      This is a To-Do lists using Vuex
    </p>
    <div class="home__dependencies">
      <ul>
        <li>dev@dmitryTk $ yarn add</li>
        <li>vue@2.6.11</li>
        <li>vuex-persistedstate@3.0.1</li>
        <li>vue-notification@1.3.20</li>
        <li>vue-router@3.1.5</li>
        <li>vuex@3.1.2</li>
        <li>tiny-emitter@2.1.0</li>
      </ul>
      <div class="home__blink">_</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding-top: 100px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &__text {
    @include font(20px, $white-color);
  }
  &__dependencies {
    @include font(10px, $white-color, 300);
    background: $deep-black-color;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    text-align: left;
    padding: 4px 6px;
    border: 1px dashed $white-color;
  }
  &__blink {
    @include blink();
  }
}
</style>
