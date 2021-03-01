<template>
  <div class="container">
    <div style="background-color:red">
      <slot name="header"></slot>
    </div>
    <div style="background-color:yellow">
      <slot></slot>
    </div>
    <div style="background-color:pink">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
