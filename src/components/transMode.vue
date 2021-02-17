<template>
  <div id="app">
    <transition name="mode-fade" mode="out-in">
      <button v-if="on" key="on" @click="on = false">开</button>
      <button v-else key="off" @click="on = true">关</button>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      on: false,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
body {
  margin: 30px;
}

#demo {
  position: relative;
}

button {
  position: absolute;
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}

button {
  background: #05ae7f;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>