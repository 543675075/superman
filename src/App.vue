<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-main/>
  </div>
</template>

<script>
  
  import TabBarMain from "./components/content/TabBarMain.vue"
  export default {
    name: 'App',
    components:{
      TabBarMain
    }
  }
</script>