<template>
  <div class="app">
    <!-- <pre>{{ student | json 4 }}</pre> -->
    <input v-model="input" />
    <!-- <li v-for="user in users | filterBy input in 'name'">{ { user. name } }</li>
    <li v-for=" user in users | orderBy ' lastName '' firstName '' age ' "></li> -->
  <div>{{ amount | currency '￥'}}</div>
  <input @keyup= "onKeyup | debounce 500">
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      //   student: { "name ": "ddfe", age: 3 },
      input: "",
      users: [{ name: "SKY" }, { name: "GRASS" }, { name: "NANA" }],
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
</style>