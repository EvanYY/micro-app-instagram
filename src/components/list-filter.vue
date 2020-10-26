<template>
  <div class="ins-silder-filter" @click.stop="stop">
    <div class="ins-silder-filter-box">
      <div class="ins-silder-filter-container">
        <input class="ins-silder-filter_input" type="text" placeholder="请输入关键词" v-model.trim="search.a" style="width: 220px" />
        <div class="ins-silder-filter_icon ins-slider-filter-tips" style="flex:1;" @click="changePopover">
          <IconSvg class="ins-icon-hover" name="custom-drop-down-triangle" style="font-size:8px"></IconSvg>
        </div>
        <div class="ins-silder-filter_icon" style="flex:1.5" @click.stop="sendSearch">
          <span class="custom custom-search-new ins-icon-hover" style="font-size: 16px;color:#A9B9C9"></span>
        </div>
      </div>
    </div>
    <transition name="fade-in-linear">
      <div class="ins-silder-filter-content" v-show="showPopper">
        <div style="width:336px;"><span class="ins-silder-filter-content_title">高级检索</span></div>
        <template v-if="current === 'msg'">

        </template>
        <template v-else-if="current === 'com'"></template>
      </div>
    </transition>
  </div>
</template>

<script>
const mode = {
  msgArgs: ['a'],
  comArgs: ['a']
}
export default {
  name: 'listFilter',
  props: ['current'],
  data () {
    return {
      // 超集
      search: {
        a: ''
      },
      showPopper: false
    }
  },
  computed: {},
  watch: {},
  components: {},
  methods: {
    stop () {},
    changePopover () {
      this.showPopper = !this.showPopper
    },
    sendSearch () {
      const args = mode[`${this.current}Args`]
      const send = {}
      if (args) {
        args.forEach((v) => {
          send[v] = this.search[v]
        })
      }
      this.$emit('search', send)
    }
  },
  created () {},
  mounted () {},
  beforeDestory () {}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/list-filter";
</style>
