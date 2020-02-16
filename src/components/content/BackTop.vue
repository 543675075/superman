<template>
  <div class="back-top">
    <span>↑</span>
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    right: 10px;
    bottom: 60px;
    border-radius: 50%;
    background-color: #ccc;
  }
</style>