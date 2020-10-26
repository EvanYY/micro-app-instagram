<template>
  <div style="width: 100%">
    <template v-if="current === 'msg'">
      <msgItem v-for="(v,i) in currentList" :key="i" @click="sendMsg(v, i)" :info="v"></msgItem>
    </template>
    <template v-else-if="current === 'com'">
      <comItem v-for="(v,i) in currentList" :key="i" @click="sendMsg(v, i)" :info="v"></comItem>
    </template>
  </div>
</template>

<script>
import msgItem from './slider-list-boxs/msg-item'
import comItem from './slider-list-boxs/com-item'
// import { getVistorList } from '@/api/common'
export default {
  name: 'sliderList',
  props: ['current'],
  data () {
    return {
      cur: -1,
      currentList: []
    }
  },
  computed: {},
  watch: {},
  components: { msgItem, comItem },
  methods: {
    reset () {
      this.currentList = []
    },
    sendMsg (v, i) {
      this.cur = i
      this.$emit('sendMsg', v)
    },
    async load () {
      this.currentList = Array(30).fill({
        name: Math.random()
      })
      // const data =
      //   this.current === 'msg' ? await getVistorList() : await getVistorList()
      // if (data) {
      // }
    }
  },
  created () {},
  mounted () {},
  beforeDestory () {}
}
</script>

<style lang="scss" scoped>
</style>
