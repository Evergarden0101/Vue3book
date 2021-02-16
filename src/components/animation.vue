<template>
  <div id="app">
    <button @click="show = !show">切换</button>
    <transition name="bounce">
      <p v-if="show">弹跳显示</p>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      show: true,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>