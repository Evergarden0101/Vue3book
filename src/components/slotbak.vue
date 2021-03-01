<template>
  <div id="app" class="demo">
    <child-comp>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
    </child-comp>
  </div>
</template>

<script>
import ChildComp from "./childComp.vue";

export default {
  components: {
    ChildComp,
  },
};
</script>
