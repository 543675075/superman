<template>
  <div class="home-goods">
    <home-goods-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>
<script>
  import HomeGoodsItem from './HomeGoodsItem.vue'
  export default {
    name: "HomeGoods",
    props:{
      goods:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components:{
      HomeGoodsItem
    }
  }
</script>

<style>
.home-goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>