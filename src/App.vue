<template>
  <div style="width:100%;height:100%">
    instagram
  </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/locale'

export default {
  components: {

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
    })
  },
  methods: {

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

</style>
