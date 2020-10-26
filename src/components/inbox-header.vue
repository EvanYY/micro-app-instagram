<template>
  <div class="ins-inbox-header">
    <template v-if="inBH.type === 'single'">
      <div class="ins-inbox-avator"><img :src="inBH.img" alt="" srcset=""></div>
    </template>
    <template v-if="inBH.type === 'group'">
      <div class="ins-inbox-avator__group">
        <div class="ins-inbox-avator ins-inbox-avator__group-position before"><img :src="inBH.groupBefore" alt="" srcset=""></div>
        <div class="ins-inbox-avator ins-inbox-avator__group-position after"><img :src="inBH.groupAfter" alt="" srcset=""></div>
      </div>
    </template>
    <div class="ins-inbox-header-msg">{{inBH.message}}</div>
  </div>
</template>

<script>
export default {
  name: 'inboxHeader',
  props: [],
  data () {
    return {}
  },
  computed: {
    inBH () {
      return {
        type: 'group',
        img:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2819344467,1935426999&fm=26&gp=0.jpg',
        groupBefore:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
        groupAfter:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4131746241,2477555401&fm=11&gp=0.jpg',
        message:
          'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2546040614,1282330064&fm=85&app=92&f=PNG?w=121&h=75&s=00314A3216CFB309505370DC020010B4；https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2546040614,1282330064&fm=85&app=92&f=PNG?w=121&h=75&s=00314A3216CFB309505370DC020010B4；https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2546040614,1282330064&fm=85&app=92&f=PNG?w=121&h=75&s=00314A3216CFB309505370DC020010B4；https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2546040614,1282330064&fm=85&app=92&f=PNG?w=121&h=75&s=00314A3216CFB309505370DC020010B4；https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2546040614,1282330064&fm=85&app=92&f=PNG?w=121&h=75&s=00314A3216CFB309505370DC020010B4'
      }
    }
  },
  watch: {},
  components: {},
  methods: {},
  created () {},
  mounted () {},
  beforeDestory () {}
}
</script>

<style lang="scss" scoped>
$--base-avator: 44px !default;
$--base-avator-group: 32px !default;
.ins-inbox-header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &-msg {
    flex: 1;
    overflow: hidden;
    font-family: "PingFangSC-Medium";
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 12px;
    font-size: 16px;
    color: rgba($color: #000000, $alpha: 0.8);
  }
  .ins-inbox-avator__group {
    width: $--base-avator;
    height: $--base-avator;
    position: relative;
    display: flex;
    &-position {
      position: absolute;
      width: $--base-avator-group;
      height: $--base-avator-group;
      justify-content: center;
      align-items: center;
    }
    .before {
      transform: translate(-8px, -8px);
    }
    .after {
      transform: translate(8px,5px);
    }
  }
}
.ins-inbox-avator {
  width: $--base-avator;
  height: $--base-avator;
  img {
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
