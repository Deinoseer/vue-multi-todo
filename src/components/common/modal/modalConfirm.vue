<template>
  <div class="modal-confirm">
    <div class="modal-confirm__header">are you sure ?</div>
    <div class="modal-confirm__content">
      <slot />
    </div>
    <div class="modal-confirm__footer">
      <div class="modal-confirm__btn">
        <base-button class="button_green" @click="$emit('modal-close', true)">
          accept
        </base-button>
      </div>
      <div class="modal-confirm__btn">
        <base-button class="button_red" @click="$emit('modal-close', false)">
          decline
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.modal-confirm {
  @include font(12px, $white-color, 300);
  width: 350px;
  background: $dark-green-color;
  border: 1px dashed $green-color;
  &__header {
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    padding: 4px 0;
    border-bottom: 1px dashed $green-color;
  }
  &__content {
    padding: 8px 12px;
  }
  &__footer {
    border-top: 1px dashed $green-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }
}
</style>
