<template>
  <div id="app">
    <li v-for="n in evenNumbers">
      {{ n }}
    </li>
    <!-- <br />
    <li v-for="n in sortNumbers">
      {{ n }}
    </li> -->
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      numbers: [1, 2, 3, 4, 5],
    });

    const evenNumbers = computed(() => {
      return data.numbers.filter((number) => number % 2 === 0);
    });

    // const sortNumbers = computed(() => {
    //   return data.numbers.sort((a, b) => a< b);
    // });

    return {
      ...toRefs(data),
      evenNumbers,
    //   sortNumbers,
    };
  },
};
</script>
