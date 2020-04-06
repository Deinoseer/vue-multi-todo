<template>
  <div>
    <component :is="props.item.type" :toast="props">
      <div slot="close">
        <a class="vue-notification__close" @click="props.close"></a>
      </div>
    </component>
  </div>
</template>

<script>
import error from "Common/notification/errorTemplate";
import success from "Common/notification/successTemplate";
import notificationTypes from "@/models/notificationTypes";

export default {
  components: {
    error,
    success
  },
  props: {
    props: {
      type: Object,
      default: null,
      validator(props) {
        return Object.keys(notificationTypes).includes(props.item.type);
      }
    }
  }
};
</script>
