<template>
<div id='app'>
  <!-- 绑定 attribute -->
  <img v-bind:src="imageSrc" />
  <!-- 缩写 -->
  <img :src="imageSrc" />
  <!-- 内联字符串拼接 -->
  <img :src="'/path/to/images/' + fileName" />

  <!-- 动态 attribute 名 -->
  <button v-bind:[key]="value"></button>
  <!-- 动态 attribute 名缩写 -->
  <button :[key]="value"></button>

  <!-- class 绑定 -->
  <div :class="[classA, { classB: isB, classC: isC }]">
    <!-- style 绑定 -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObjectA, styleObjectB]"></div>
    <!-- prop 绑定。"prop" 必须在 my-component 声明 -->
    <my-component :prop="someThing"></my-component>

    <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
    <child-component v-bind="$props"></child-component>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style></style>
