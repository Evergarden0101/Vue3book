<template>
  <div class="app">
    <!-- <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div> -->
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[{ active: isActive }, hasError ? errorClass : '']"></div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      //   isActive: true,
      //   hasError: false,
      activeClass: "active",
      errorClass: "text-danger",
    });

    // const classObject = computed(() => {
    //   return {
    //     active: data.isActive && !data.error,
    //     "text-danger": data.error && data.error.type === "fatal",
    //   };
    // });

    return {
      ...toRefs(data),
      //   classObject,
    };
  },
};
</script>