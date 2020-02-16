<template>
  <div class="home">
    <NavBar class="nav-bar">
      <h2 slot="center">购物街</h2>
    </NavBar>
    <better-scroll class="better-scroll" ref="BS" 
                                @scrollY="scrollY" 
                                @pullingDown="pulling" 
                                :pullUpLoad="true" 
                                :proBeType="3">
      <home-swiper :swiperList="swiperList" />
      <home-recommend :recommend="recommend" />
      <Fashion />
      <home-control :list="['流行','新款','精选']" @get="get"/>
      <home-goods :goods="show"></home-goods>
    </better-scroll>
    <back-top v-show="isShow" @click.native="backTop"/>
  </div>
</template>

<script>
  // 这里是各个子组件
  import NavBar from "components/common/navbar/NavBar.vue"
  import HomeSwiper from "./HomeSwiper.vue"
  import HomeRecommend from "./HomeRecommend.vue"
  import Fashion from "./Fashion.vue"
  import HomeControl from 'components/content/HomeControl.vue'
  import HomeGoods from 'components/content/HomeGoods'
  import BackTop from 'components/content/BackTop'

  // 导入封装好的better-scroll组件
  import BetterScroll from 'components/common/BetterScroll'
  //导入request 请求
  import { homeSwiper, homeShowPic } from "network/home.js"
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      Fashion,
      HomeControl,
      HomeGoods,
      BackTop,
      BetterScroll
    },
    data() {
      return {
        swiperList: [],
        recommend: [],
        goods:{
          "pop":{
            list:[],
            page: 0
          },
          "new":{
            list:[],
            page: 0
          },
          "sell":{
            list:[],
            page: 0
          },
        },
        current: "pop",
        isShow: false
      }
    },
    
    computed: {
      show(){
        return this.goods[this.current].list
      }
    },
    
    created() {
      //轮播图请求
      this.homeSwiper()
      // 展示商品请求
      this.homeShowPic("pop")
      this.homeShowPic("new")
      this.homeShowPic("sell")
    },
    
    
    
    methods: {
      get(index){
        switch(index){
          case 0:
          this.current= "pop"
          break
          case 1:
          this.current= "new"
          break
          case 2:
          this.current= "sell"
          break
        }
      },
      homeSwiper() {
        homeSwiper().then(res => {
          // console.log(res)
          this.swiperList = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        }).catch(err => {
          console.log(err)
        })
      },
      
      homeShowPic(type){
        homeShowPic(type, this.goods[type].page+1).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page +=1
      })
      },
      // 回到顶部方法
      backTop(){
      //  console.log(this.$refs.BS.BS)
      this.$refs.BS.BS.scrollTo(0, 0,500)
      },
      //判断是否出现回到顶部的按钮
      scrollY(value){
        this.isShow = -value>1000
      },
      // 监听上拉加载事件
      pulling(){
        this.homeShowPic(this.current)
        this.$refs.BS.BS.finishPullUp()
      }
    },
  }
</script>

<style>
  .home{
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: pink;
    z-index: 2;
  }

  h2 {
    text-align: center;
    color: #fff;
  }
  .better-scroll{
    position: absolute;
    top:48px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>