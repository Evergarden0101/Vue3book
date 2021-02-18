<template>
  <div id="app">
    <button @click="shuffle">打乱</button>
    <button @click="add">添加</button>
    <button @click="remove">移除</button>
    <transition-group name="complete-list" tag="p">
      <span v-for="item in items" :key="item" class="complete-list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import _ from "lodash";
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

    const shuffle = () => {
      data.items = _.shuffle(data.items);
    };

    return {
      ...toRefs(data),
      randomIndex,
      add,
      remove,
      shuffle,
    };
  },
};
</script>

<style>
body {
  margin: 30px;
}

.complete-list-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.complete-list-enter-from,
.complete-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.complete-list-leave-active {
  position: absolute;
}

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