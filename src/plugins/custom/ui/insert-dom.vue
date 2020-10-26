<template>
  <div class="base">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'XHLContainerInsertDom'
}
</script>

<style lang="scss" scoped>
.base {
  width: 100%;
  line-height: 60px;
  box-sizing: border-box;
  padding: 0 20px;
}
</style>
