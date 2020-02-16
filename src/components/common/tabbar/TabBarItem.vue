<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :class={active:isTrue}>
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      value: {
        type: String
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path !== this.value) {
          this.$router.replace(this.value)
        }
      },
    },
    computed: {
      isTrue() {
        return this.$route.path == this.value
      }
    },
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }
</style>