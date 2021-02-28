<template>
  <div id="app" class="demo">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
      >
      </blog-post>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import BlogPost from './BlogPost.vue'

export default {
  components: {
    BlogPost,
  },
  setup() {
    const data = reactive({
      posts: [
        { id: 1, title: "Vue 3" },
        { id: 2, title: "HTML" },
        { id: 3, title: "JavaScript" },
      ],
      postFontSize: 1,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
