<template>
  <header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swiperList" :key=index>
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
    </van-swipe>
  </header>
</template>

<script>
 
 
  // 导入vant的轮播组件
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  //注册vant的轮播组件
  Vue.use(Swipe);
  Vue.use(SwipeItem);

  //导出
  export default {
    name: "HomeSwiper",
    props:{
      swiperList:{
        type: Array,
      }
    },
  }

</script>

<style>
  .van-swipe{
    margin-top: 48px;
  }
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* line-height: 150px; */
    text-align: center;
    /* background-color: #39a9ed; */
  }

  .van-swipe-item img {
    max-width: 100%;
  }
</style>