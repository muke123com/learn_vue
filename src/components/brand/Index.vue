<template>
  <div class="hello">
    1111
  </div>
</template>

<script>
export default {
  name: 'BrandIndex',
  props: ['id'],
  data () {
    return {
      msg: '商标列表'
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "./brand.css";
</style>
