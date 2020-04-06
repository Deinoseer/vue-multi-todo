<template>
  <div
    class="icon-base"
    :class="{ 'icon-base_red': red, 'icon-base_grey': grey }"
  ></div>
</template>

<script>
export default {
  props: {
    red: Boolean,
    grey: Boolean
  }
};
</script>

<style lang="scss">
.icon-base {
  display: inline-block;
  height: auto;
  line-height: 0;
  &_red {
    @include colorizeSvg($red-color);
  }
  &_grey {
    @include colorizeSvg($grey-color);
  }
}
</style>
