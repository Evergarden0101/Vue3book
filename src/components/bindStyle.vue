<template>
  <div class="app">
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">string style</div>
    <div :style="styleObject">object style</div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      activeColor: "red",
      fontSize: 30,
      styleObject: {
      color: 'red',
      fontSize: '13px'
    }
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>