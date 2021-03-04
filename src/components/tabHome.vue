<template>
  <div class="demo-tab">
    <div class="card" style="background-color: lightskyblue">
      <h1>Home</h1>
      <h4>Here's the home page!</h4>
    </div>
    <div class="card" style="background-color: tomato;">
      <h2>Trends</h2>
      <div
        v-for="trend in trends"
        :key="trend.id"
        :class="{
          'demo-active': trend === selectedTrend,
        }"
        @click="selectedTrend = trend"
      >
        <h3>{{ trend.title }}</h3>
        <div v-if="trend === selectedTrend">
          <div
            v-html="selectedTrend.content"
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
      trends: [
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
      selectedTrend: null,
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
  
}
</style>