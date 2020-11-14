<template>
  <div id="app">
    <p>{{ a }}</p>
    <p>{{ b }}</p>
    <p>{{ c }}</p>
    <button @click="changeBtn">改变</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  setup() {
    const a = ref(2); //一个响应式且可变的ref对象,此时a的值为2

    const state = reactive({
      //创建对象的响应式副本，并非直接响应式
      b: 3,
      c: "Vue 3.0",
    });

    a.value = 4;

    const changeBtn = () => {
      console.log("---changing------");
      state.b = 5;
      state.c = "changed";
      a.value = 8;
    };

    return {
      a,
      ...toRefs(state), //toRef()函数将data转化为响应式
      changeBtn
    };
  },
};
</script>
