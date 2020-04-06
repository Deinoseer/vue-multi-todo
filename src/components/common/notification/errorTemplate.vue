<template>
  <div class="vue-notification-template vue-notification error">
    <div class="vue-notification__content-wrapper">
      <div class="vue-notification__title" v-if="toast.item.title">
        {{ toast.item.title }}
      </div>
      <div class="vue-notification__content">
        <span v-html="toast.item.text"></span>
      </div>
      <slot name="close"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toast: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.vue-notification {
  padding: 13px 13px 13px 16px;
  @include font(12px, $white-color);
  background: $red-color !important;
  border: none !important;
  border-radius: 0;
  width: 400px;
  min-height: 48px;

  &__content-wrapper {
    padding-right: 30px;
  }
}
</style>
