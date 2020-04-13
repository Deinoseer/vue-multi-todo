<template>
  <component
    class="button"
    :class="classes"
    :to="to"
    :is="tag"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <icon-base class="button__icon" v-if="icon">
      <component :is="getIcon" />
    </icon-base>
    <span class="button__text">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: "baseButton",
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    }
  },
  computed: {
    tag() {
      return this.to ? "router-link" : "button";
    }
  },
  methods: {
    getIcon() {
      return () => import(`@/assets/svg/${this.icon}.svg?inline`);
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  @include font(10px, $white-color, 500);
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: border-color $transition, background-color $transition,
    color $transition, opacity $transition;
  text-transform: uppercase;
  white-space: nowrap;
  outline: none;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  cursor: pointer;
  &__icon {
    min-width: 4px;
  }
  &__text {
    padding: 0 4px;
  }
  &_green {
    @include buttonPrimary(
      $green-color,
      $orange-color,
      $black-color,
      $white-color
    );
  }
  &_red {
    @include buttonPrimary(
      $red-color,
      $orange-color,
      $black-color,
      $white-color
    );
  }
  &_delete {
    opacity: 0.2;
    &:hover,
    &:focus {
      opacity: 1;
    }
    @include buttonPrimary(
      $orange-color,
      $red-color,
      $black-color,
      $white-color
    );
  }
  &_yellow {
    @include buttonPrimary(
      $yellow-color,
      $red-color,
      $black-color,
      $white-color
    );
  }
  &_orange {
    @include buttonPrimary(
      $orange-color,
      $green-color,
      $black-color,
      $white-color
    );
  }
}
</style>
