<template>
  <div id="app">
    <input v-model.trim="name" placeholder="请输入姓名" class="inText" />
    <h6>姓名: {{ name }}</h6>
    <br />

    <div class="sex">
      <h5>选择性别</h5>
      <input type="radio" id="男" value="男" v-model="sex" />
      <label for="男">男</label>
      <input type="radio" id="女" value="女" v-model="sex" />
      <label for="女">女</label>
      <h6>性别: {{ sex }}</h6>
    </div>

    <div class="mulChoice">
      <h5>选择语言</h5>
      <input type="checkbox" id="HTML" value="HTML" v-model="checkedLang" />
      <label for="HTML">HTML</label>
      <input type="checkbox" id="CSS" value="CSS" v-model="checkedLang" />
      <label for="CSS">CSS</label>
      <input
        type="checkbox"
        id="JavaScript"
        value="JavaScript"
        v-model="checkedLang"
      />
      <label for="JavaScript">JavaScript</label>
      <h6>语言: {{ checkedLang }}</h6>
    </div>

    <select v-model="selected" class="select">
      <option disabled selected value style="display: none">请选择框架</option>
      <option>Vue 2.x</option>
      <option>Vue 3.0</option>
    </select>
    <h6>框架: {{ selected }}</h6>

    <textarea
      v-model="mulMessage"
      placeholder="备注"
      class="mulText"
    ></textarea>
    <br />
    <h6>备注:</h6>
    <p style="white-space: pre-line">{{ mulMessage }}</p>
    <br />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      name: "",
      mulMessage: "",
      selected: "",
      sex: "",
      checkedLang: [],
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
.inText {
  height: 40px;
  margin-bottom: -20px;
  border: 2px solid;
  border-radius: 6px;
}
.sex {
  width: 10%;
  height: 140px;
  position: relative;
  left: 45%;
  margin-bottom: 30px;
  border: 2px solid;
  border-radius: 6px;
}
.mulChoice {
  width: 20%;
  height: 140px;
  position: relative;
  left: 40%;
  margin-bottom: 30px;
  border: 2px solid;
  border-radius: 6px;
}
.select {
  height: 20px;
  width: 8%;
  margin-bottom: -20px;
  border: 2px solid;
  border-radius: 6px;
}
.mulText {
  height: 40px;
  margin-bottom: -20px;
  border: 2px solid;
  border-radius: 6px;
}
</style>
