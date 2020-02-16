<template>
  <div class="home-control">
    <span v-for="(item,index) in list" :key="index" :class="{current: index === whichOne}" @click="controlClick(index)">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "HomeControl",
  props: {
    list:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      whichOne: 0
    }
  },
  methods: {
    controlClick(index){
      this.whichOne = index
      this.$emit("get",index)
    }
  },
}
</script>

<style>
  .home-control{
    position: sticky;
    top: 48px;
    margin-top: 10px;
    display: flex;
    justify-content:space-evenly;
    text-align: center;
  }
  .home-control span{
    padding: 5px;
  }
  .current{
    color: red;
    border-bottom: 2px solid red;
  }
</style>