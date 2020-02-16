<template>
  <div class="home-goods-item">
    
      <a :href="goodsItem.link">
        <img :src="goodsItem.show.img" alt="">
        <p class="titel">{{goodsItem.title}}</p>
      </a>
      <div>
        <span class="price">{{goodsItem.price}}</span>
        <span class="star">收藏人数:{{goodsItem.cfav}}</span>
      </div>
    
  </div>
</template>

<script>
  export default {
    name: "HomeGoodsItem",
    props:{
      goodsItem:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
  .home-goods-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    box-sizing: border-box;
  }
  .home-goods-item a{
    width: 100%;
  }
  .home-goods-item img{
    max-width: 100%;
  }
 
 .titel{
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
 }
</style>