<template>
  <div class="demo-posts-tab">
    <ul class="demo-posts-sidebar">
      <li
        v-for="post in posts"
        :key="post.id"
        :class="{
          'demo-active': post === selectedPost,
        }"
        @click="selectedPost = post"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="demo-post-container">
      <div v-if="selectedPost" class="demo-post">
        <h3>{{ selectedPost.title }}</h3>
        <div
          v-html="selectedPost.content"
          style="
            text-indent: 2em;
            text-align: left;
            margin: 0 3em;
            width: 60%;
            left: 15%;
            position: relative;
          "
        ></div>
      </div>
      <strong v-else> Click on a blog title to view it. </strong>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      posts: [
        {
          id: 1,
          title: "Cat",
          content:
            "<p>The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents.</p>",
        },
        {
          id: 2,
          title: "Dog",
          content:
            "<p>The domestic dog (Canis familiaris when considered a separate species or Canis lupus familiaris when considered a subspecies of the wolf) is a wolf-like canid that can be found distributed around the world. The dog descended from an ancient, now-extinct wolf with the modern wolf being the dog's nearest living relative. The dog was the first species to be domesticated by hunter–gatherers more than 15,000 years ago, which predates agriculture.</p>",
        },
        {
          id: 3,
          title: "Fox",
          content:
            "<p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush). Foxes live on every continent except Antarctica. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.</p>",
        },
      ],
      selectedPost: null,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped>
li {
  min-height: 20px;
  margin-bottom: 10px;
  width: 50%;
  left: 35%;
  position: relative;
}
.demo-posts-sidebar {
  margin-bottom: 50px;
  background-color: greenyellow;
  padding: 10px 0px 5px 0;
  width: 30%;
  left: 35%;
  position: relative;
  border: solid 2px;
  border-radius: 4px;
}
</style>