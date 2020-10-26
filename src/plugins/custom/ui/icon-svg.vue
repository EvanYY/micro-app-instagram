<template>
  <svg class="svg-icon custom" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'custonIconSvg',
  props: ['name']
}
</script>

