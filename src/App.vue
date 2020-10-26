<template>
  <div style="width:100%;height:100%" @click="closeAll">
    <ElContainer style="width:100%;height:100%">
      <ElSider class="left" width="285px">
        <sliderHeader :infos="infos"></sliderHeader>
        <InsTabs :current.sync="current" @change="tabsChange"></InsTabs>
        <listFilter :current="current" @search="search" ref="insListFilter" v-show="current === 'msg'"></listFilter>
        <ListBox style="padding:0" args="msgInbox" :loading="loadingConfig.msgLoading" :noMore="loadingConfig.msgNoMore" @loadMore="loadMore">
          <sliderList ref="msgInbox" :current="current" :searchArgs="searchArgs"></sliderList>
        </ListBox>
      </ElSider>
      <ElContainer direction="vertical" style="">
        <Hfui style="text-align: right; font-size: 12px;border-bottom: 1px solid #EAEAEA">
          <inboxHeader ></inboxHeader>
        </Hfui>
        <ListBox args="aaa" :loading="loadingConfig.msgLoading" :noMore="loadingConfig.msgNoMore" @loadMore="loadMore">
          <div v-for="(v,i) in Array(20).fill({})" :key="i">{{i}}</div>
        </ListBox>
        <!-- <Hfui><span>overlord</span></Hfui> -->
      </ElContainer>
      <ElSider class="right" width="300px">
        <Hfui style="text-align: right; font-size: 12px">
          <div style="height:60px">1111</div>
        </Hfui>
      </ElSider>
    </ElContainer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/locale'
import sliderHeader from './components/slider-header'
import sliderList from './components/slider-list'
import listFilter from './components/list-filter'
import inboxHeader from './components/inbox-header'
export default {
  components: {
    sliderHeader,
    sliderList,
    listFilter,
    inboxHeader
  },
  data () {
    return {
      infos: {},
      searchArgs: {},
      current: 'msg',
      show: true
    }
  },
  computed: {
    ...mapState('MainCommon', {
      lang: (state) => state.common.switchLang
    }),
    ...mapState('Dym', {
      loadingConfig: (state) => state.loading
    })
  },
  methods: {
    tabsChange (type) {
      this.reset()
      this.$nextTick(function () {
        this.loadMore('msgInbox')
      })
    },
    closeAll () {
      if (this.$refs.insListFilter) { this.$refs.insListFilter.showPopper = false }
    },
    search (args) {
      this.searchArgs = args
      this.tabsChange(this.current)
    },
    reset () {
      this.$refs.msgInbox.reset()
    },
    loadMore (type) {
      console.log(type)
      if (type && this.$refs[type] && this.$refs[type].load) {
        this.$refs[type].load()
      }
    }
  },
  watch: {
    lang: {
      handler: function (val) {
        i18n.locale = val
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.left {
  background-color: #fafcff;
  // background-color: red;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  box-sizing: border-box;
  padding-right: 1px;
}
.right {
  border-left: 1px solid #eaeaea;
  box-sizing: border-box;
  padding-left: 1px;
}
</style>
