<template>
  <div id="app">
    <p>{{ hello }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const hello = ref("Hello Vue3");
    return {
      hello,
    };
  },
};
</script>