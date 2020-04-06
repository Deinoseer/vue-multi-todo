<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__overlay" @click="$emit('clickOverlay')" />
      <div class="modal__body">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@include fade();

.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  overflow-y: auto;
  &__overlay {
    width: 100%;
    height: 100%;
    background: rgba(1, 1, 1, 0.8);
    z-index: 1;
    position: fixed;
  }
  &__body {
    margin: auto;
    position: relative;
    z-index: 10001;
  }
}
</style>
