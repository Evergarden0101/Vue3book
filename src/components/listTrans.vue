<template>
  <div id="app">
    <button @click="add">添加</button>
    <button @click="remove">移除</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    });

    const randomIndex = () => {
      return Math.floor(Math.random() * data.items.length);
    };

    const add = () => {
      data.items.splice(randomIndex(), 0, data.nextNum++);
    };

    const remove = () => {
      data.items.splice(randomIndex(), 1);
    };

    return {
      ...toRefs(data),
      randomIndex,
      add,
      remove,
    };
  },
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-move {
  transition: transform 0.8s ease;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 
.list-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
} */

button {
  background: #05ae7f;
  border-radius: 4px;
  border: none;
  padding: 0.75rem 1rem;
  margin: 1rem;
  color: #ffffff;
  font-size: 1rem;
}
</style>