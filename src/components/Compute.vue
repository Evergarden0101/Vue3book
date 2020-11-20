<template>
  <div id="app">
    <p>{{ num }}</p>
    <!--<p>{{ double }}</p>-->
    <p>{{ tripple }}</p>
    <!--<button @click="addBtn">num+1</button>-->
    <button @click="trip">tripple=9</button>
  </div>
</template>

<script>
import { computed, toRefs, reactive, ref, watch } from "vue";

export default {
  setup() {
    const data = reactive({
      num: 1,
      doubleNum: computed(() => data.num * 2),
    });

    const double = computed(() => {
      return data.num * 2;
    });

    const tripple = computed({
      get: () => data.num * 3,
      set: (val) => {
        data.num = val / 3;
      },
    });

    const addBtn = () => {
      data.num++;
    };

    const trip = () => {
      tripple.value = 9;
    };

    return {
      ...toRefs(data),
      double,
      addBtn,
      tripple,
      trip,
    };
  },
};
</script>
