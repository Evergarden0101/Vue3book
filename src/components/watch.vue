<template>
  <div id="app">
    <p>{{ num }}</p>
    <p>{{ count }}</p>
    <button @click="addNum">num++</button>
    <button @click="addCount">count++</button>
  </div>
</template>

<script>
import { computed, toRefs, reactive, ref, watch } from "vue";

export default {
  setup() {
    //侦听reactive类型的数据源
    const data = reactive({
      num: 1,
      num1: 1,
      num2: 2,
    });

    watch(
      () => data.num,
      (newNum, oldNum) => {
        console.log("newNum = ", newNum);
        console.log("oldNum = ", oldNum);
      }
    );

    //侦听ref对象
    const count = ref(0);
    const count1 = ref(1);
    const count2 = ref(2);

    watch(count, (newCount, oldCount) => {
      console.log("newCount = ", newCount);
      console.log("oldCount = ", oldCount);
    });

    //侦听多个reactive类型
    watch(
      [() => data.num1, () => data.num2],
      ([newNum1, newNum2], [prevNum1, prevNum2]) => {
        //Do something
      }
    );

    //侦听多个ref类型
    watch(
      [count1, count2],
      ([newCount1, newCount2], [prevCount1, prevCount2]) => {
        //Do something
      }
    );

    const addNum = () => {
      data.num++;
    };

    const addCount = () => {
      count.value++;
    };

    return {
      ...toRefs(data),
      count,
      addNum,
      addCount,
      count1,
      count2,
    };
  },
};
</script>
