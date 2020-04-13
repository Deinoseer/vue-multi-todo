<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input
        type="checkbox"
        class="checkbox__input"
        :checked="checked"
        v-bind="$attrs"
        @change="$emit('input', !checked)"
      />
      <span class="checkbox__check"></span>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    checked: {
      type: [Boolean],
      required: true,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.checkbox {
  &__label {
    position: relative;
    user-select: none;
    display: flex;
    align-items: center;
  }
  &__input {
    position: absolute;
    opacity: 0;
    & + span {
      transition: $transition-fast all;
    }
    &:hover + span,
    &:focus + span {
      border-color: $yellow-color;
    }
    &:checked + span {
      background-position: center;
      background-color: $red-color;
    }
    &[disabled] {
      & + span {
        border-color: $grey-color;
        background-color: $grey-color;
        cursor: not-allowed;
        & + &__text {
          color: $grey-color;
        }
      }
    }
  }
  &__check {
    $width: 18px;
    display: inline-block;
    vertical-align: middle;
    width: $width;
    height: 18px;
    border: 1px solid $red-color;
    border-radius: 2px;
    background-size: 10px 8px;
    background: url("~@/assets/svg/uncheck.svg") no-repeat $width 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
}
</style>
