<template>
  <ElMain v-infinite-scroll="loadMore" :infinite-scroll-disabled="disabled"  :infinite-scroll-throttle-delay="200" :infinite-scroll-immediate="immediate" :infinite-scroll-distance="10">
    <slot></slot>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">无更多数据</p>
  </ElMain>
</template>

<script>
export default {
  name: 'listBox',
  props: {
    args: {
      type: String,
      default: 'msg'
    },
    loading: {
      type: Boolean,
      require: true
    },
    noMore: {
      type: Boolean,
      require: true
    },
    immediate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    loadMore () {
      this.$emit('loadMore', this.args)
    }
  }
}
</script>

<style lang="scss" scoped>
.ins-list-box {
  box-sizing: border-box;
  display: block;
  flex: 1;
  overflow: auto;
  flex-basis: auto;
}
</style>
