<template>
  <div class="demo-tab">
    <div class="card">
      <h2>Likes</h2>
      <div
        v-for="like in likes"
        :key="like.id"
        :class="{
          'demo-active': like === selectedLike,
        }"
        @click="selectedLike = like"
      >
        <h3>{{ like.title }}</h3>
        <div v-if="like === selectedLike">
          <div
            v-html="selectedLike.content"
            style="text-indent: 2em; text-align: left; margin: 0 3em"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      likes: [
        {
          id: 1,
          title: "Cat",
          content:
            "<p>The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents.</p>",
        },
        {
          id: 3,
          title: "Fox",
          content:
            "<p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush). Foxes live on every continent except Antarctica. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.</p>",
        },
      ],
      selectedLike: null,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped>
.card {
  width: 80%;
  min-height: 50px;
  border: solid 2px;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  left: 10%;
  background-color: gold;
}
</style>