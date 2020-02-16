<template>
  <tab-bar>
    <tab-bar-item value="/home">
      <i class="myfont" slot="icon">&#xe68a;</i>
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item value="/cart">
      <i class="myfont" slot="icon">&#xe611;</i>
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item value="/category">
      <i class="myfont" slot="icon">&#xe6a2;</i>
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item value="/profile">
      <i class="myfont" slot="icon">&#xe610;</i>
      <div slot="text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBarItem from '../common/tabbar/TabBarItem'
  import TabBar from '../common/tabbar/TabBar.vue'

  export default {
    name: "TabBarMain",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>