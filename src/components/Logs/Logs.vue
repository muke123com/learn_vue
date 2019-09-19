<template>
  <div class="logs">
    <p v-for="(log, key) in logs" :key="key">{{log}}</p>
  </div>
</template>
<script>
export default {
  name: "logs",
  data() {
    return {
      logs: []
    };
  },
  methods: {
    addLog(msg) {
      this.logs.push(msg);
    }
  }
};
</script>