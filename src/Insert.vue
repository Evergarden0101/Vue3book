<template>
  <div id="app">
    <p><label>变量:</label> {{ num }}</p>
    <p><label>表达式:</label> {{ 5 + 10 }}</p>
    <p><label>条件运算符:</label> {{ true ? 5 : 10 }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const num = ref("2");

    return {
      num,
    };
  },
};
</script>
