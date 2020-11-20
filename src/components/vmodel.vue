<template>
  <div id="app">
    <input v-model="message" placeholder="请输入" />
    <p>Message is: {{ message }}</p>
    <br />

    <!--多行文本-->
    <textarea v-model="mulMessage" placeholder="请输入"></textarea>
    <br />
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ mulMessage }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      message: "",
      mulMessage: "",
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style></style>
