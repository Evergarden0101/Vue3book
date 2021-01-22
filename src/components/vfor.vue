<template>
  <div id="app">
    <!-- <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li> -->
    <li v-for="(value, name, index) in obj" :key="index">
      {{ index }}、{{ name }}: {{ value }}
    </li>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      parentMessage: "Parent",
      items: [
        { message: "HTML" },
        { message: "JavaScript" },
        { message: "CSS" },
      ],
      obj: {
        title: "v-for in Vue",
        author: "SkyGrass",
        date: "1993-5-31",
      },
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
