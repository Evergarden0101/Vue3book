<template>
  <div id="app" class="demo">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <!-- <component v-bind:is="currentTabComponent" class="tab"></component> -->

    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import TabPosts from "./tabPosts.vue";
import TabHome from "./tabHome.vue";
import TabLikes from "./tabLikes.vue";

export default {
  components: {
    TabPosts,
    TabHome,
    TabLikes,
  },
  setup() {
    const data = reactive({
      currentTab: "Home",
      tabs: ["Home", "Posts", "Likes"],
    });

    const currentTabComponent = computed(() => {
      return "tab-" + data.currentTab.toLowerCase();
    });

    return {
      ...toRefs(data),
      currentTabComponent,
    };
  },
};
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 12px 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -2px;
  margin-right: -2px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>