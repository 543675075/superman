<template>
  <nav class="tab-bar">
    <slot></slot>
  </nav>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>
<style>
  .tab-bar {
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background-color:rgba(255, 255, 255, .99);
    box-shadow: 0 -1px 3px rgba(100, 100, 100, .2);
  }
</style>