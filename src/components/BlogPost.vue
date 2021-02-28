<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlargeText')">Enlarge text</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
