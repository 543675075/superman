<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from "better-scroll"
  export default {
    name: "BetterScroll",
    data() {
      return {
        BS:null,
      }
    },
    props:{
      pullUpLoad:{
        type: Boolean,
        default: false
      },
      proBeType:{
        type: Number,
        default: 0
      }

    },
    mounted() {
      this.BS = new BScroll(".wrapper",{
        pullUpLoad: this.pullUpLoad,
        click: true,
        proBeType: this.proBeType
      })

      this.BS.on("scroll",(position)=>{
        this.$emit("scrollY",position.y)
        // console.log(position.y)
      })

      this.BS.on("pullingUp",()=>{
        this.$emit("pullingDown")
      })
    },


  }
   
</script>