<template>
  <div id="app">
    <div v-for="(item, index) in posts" :key="index" class="post">
      <h1 v-if="item.isStar === true" style="color: red">
        {{ item.title }}
      </h1>
      <h1 v-if="item.isStar === false">
        {{ item.title }}
      </h1>
      <div class="content">
        {{ item.detail }}
      </div>
      <button class="star" v-if="item.isStar === false" @click="addStar(item)">
        收藏
      </button>
      <button class="star" v-if="item.isStar === true" @click="addStar(item)">
        取消收藏
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      posts: [
        { title: "HTML", detail: "Something about HTML.", isStar: false },
        {
          title: "JavaScript",
          detail: "Something about JavaScript.",
          isStar: true,
        },
        { title: "CSS", detail: "Something about CSS.", isStar: false },
      ],
    });

    const addStar = (item) => {
      //do something
    };

    return {
      ...toRefs(data),
      addStar,
    };
  },
};
</script>

<style scoped>
.post{
    width: 400px;
    margin-bottom: 10px;
    border:solid 1px;
    border-radius: 4px;
    position: relative;
    
}
.star {
  width: 100px;
  border-radius: 4px;
  margin-top: 25px;
  margin-bottom: 20px;
}

.content {
  margin-top: 0px;
}
</style>