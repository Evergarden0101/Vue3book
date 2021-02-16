<template>
  <div id="app">
    <button @click="show = !show">切换</button>

    <transition name="fade">
      <p v-if="show">Hello</p>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>