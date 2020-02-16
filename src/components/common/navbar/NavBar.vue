<template>
  <nav class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div> 
    <div class="right">
      <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style>
  .nav-bar{
    display: flex;
    height: 48px;
    line-height: 48px;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>