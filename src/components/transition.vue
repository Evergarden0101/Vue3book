<template>
  <div id="app">
    <!-- 点击按钮触发动画:<br />

    <div :class="{ shake: noActivated }">
      <button @click="noActivated = true">点击</button>
      <span v-if="noActivated">禁止点击!</span>
    </div> -->

    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <h3>在组件中左右移动鼠标</h3>
      <p>x: {{ x }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      noActivated: false,
      x: 0,
    });

    const xCoordinate = (e) => {
      data.x = e.offsetX;
    };

    return {
      ...toRefs(data),
      xCoordinate,
    };
  },
};
</script>

<style>
.movearea {
  transition: 0.2s background-color ease;
  height: 100px;
  width: 40%;
  position: absolute;
  left: 30%;
  color: orange;
}

/* 
body {
  margin: 30px;
}

button {
  background: #d93419;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  margin: 20px 10px 0 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:focus {
  outline: 1px dashed #fff;
  outline-offset: -3px;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
} */
</style>