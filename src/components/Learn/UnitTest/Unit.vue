<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    <input type="text" v-model="text" >
    <button @click="testClick">点击</button>
  </div>
</template>
<script>
export default {
  name: "unit",
  data() {
    return {
        text: ""
    };
  },
  methods: {
      testClick() {
          this.text = "456";
      }
  }
};
</script>