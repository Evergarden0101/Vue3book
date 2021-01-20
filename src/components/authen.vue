<template>
  <div id="app">
    <h1>User Type:</h1>
    <template v-if="user === 'student'">
      <h2>{{ user }}</h2>
      <br />
      <button @click="joinClass">加入课程</button>
    </template>
    <template v-if="user === 'teacher'">
      <h2>{{ user }}</h2>
      <br />
      <button @click="startClass">开始上课</button>
    </template>
    <template v-if="user === 'teaching assistant'">
      <h2>{{ user }}</h2>
      <br />
      <button @click="manageStudent">管理学生</button>
    </template>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      user: "teaching assistant",
    });

    const joinClass = () => {
      console.log("Request already sent!");
    };

    const startClass = () => {
      console.log("Class begin!");
    };

    const manageStudent = () => {
      console.log("Checking requests!");
    };

    return {
      ...toRefs(data),
      joinClass,
      startClass,
      manageStudent,
    };
  },
};
</script>
