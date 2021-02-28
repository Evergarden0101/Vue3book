<template>
  <div id="components-demo">
    <my-component></my-component>
  </div>
</template>

<script>
const app = Vue.createApp({});
app.component("my-component", {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </>
`,
});

app.mount("#components-demo");
</script>

<style>
</style>


