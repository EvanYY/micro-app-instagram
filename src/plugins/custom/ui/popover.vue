<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <ul class="el-dropdown-menu el-popper" :class="[size && `el-dropdown-menu--${size}`]" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'insPopover',
  props: {
    showPopper: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  components: {},
  methods: {
    handleAfterEnter (event) {},
    handleAfterLeave (event) {}
  },
  created () {},
  mounted () {},
  beforeDestory () {}
}
</script>

<style lang="scss" scoped>

</style>
