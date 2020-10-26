<template>
  <div class="ins-header">
    <div class="ins-header-avator">
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3582194852,1481557220&fm=26&gp=0.jpg" alt="">
    </div>
    <div class="ins-header-name">LeadsClouds</div>
  </div>
</template>

<script>
export default {
  name: 'sliderHeader',
  props: {
    infos: {
      type: Object,
      required: true,
      default: () => ({
        img: '',
        fullName: ''
      })
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.ins-header {
  width: 100%;
  line-height: 60px;
  box-sizing: border-box;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &-avator {
    width: 38px;
    height: 38px;
    img {
      border-radius: 50%;
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-name {
    font-family: 'PingFangSC-Medium';
    margin-left: 8px;
    font-size: 16px;
    font-weight: bold;
    width: 180px;
    overflow: hidden;
    color:rgba($color: #000000, $alpha: .8);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
