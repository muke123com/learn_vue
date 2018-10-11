<template>
  <div id="app">
    <layout></layout>
    <router-view/>
  </div>
</template>

<script>
import Layout from './components/layout/Layout.vue'

export default {
  components: {Layout},
  name: 'App'
}
</script>

