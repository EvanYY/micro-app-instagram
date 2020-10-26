<template>
  <div class="ins-tabs">
    <div class="ins-tabs-item" v-for="(v,i) in list" :key="i" @click="change(v,i)"><span :class="{'ins-tabs_is-active': isActive === v.t}">{{v.n}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'tabsChange',
  props: ['current'],
  data () {
    return {
      isActive: 'msg'
    }
  },
  computed: {
    list () {
      return [
        { n: '消息', t: 'msg' },
        { n: '评论', t: 'com' }
      ]
    }
  },
  watch: {},
  components: {},
  mounted () {
    this.isActive = this.current || 'msg'
  },
  methods: {
    change (v, i) {
      if (this.isActive === v.t) return false
      this.isActive = v.t
      this.$emit('update:current', v.t)
      this.$emit('change', v.t)
    }
  }
}
</script>

<style lang="scss" scoped>
.ins-tabs {
  display: flex;
  width: 100%;
  &-item {
    flex: 1;
    text-align: center;
    color: rgba($color: #000000, $alpha: 0.6);
    cursor: pointer;
    user-select: none;
    span {
      display: inline-block;
      font-size: 14px;
      height: 46px;
      line-height: 46px;
      font-weight: 500;
    }
  }
  &_is-active {
    color: #fa8241;
    font-weight: 600;
    border-bottom: 2px solid #fa8241;
  }
}
</style>
