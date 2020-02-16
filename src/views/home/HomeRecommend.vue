<template>
  <div class="recommend">
    <ul class="recommend-list">
      <li v-for="(item,index) in recommend" :key="index" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </li>
    </ul>
    
  </div>
</template>


<script>
 
  export default {
    name: "HomeRecommend",
    props: {
      recommend: {
        type: Array
      }
    }

  }
</script>

<style>
  .recommend-list{
    display: flex;
    margin-top: 10px;
  }
  .recommend-item{
    flex: auto;
    margin: 0 5px;

  }
  .recommend-item img{
    max-width: 100%;
  }
</style>