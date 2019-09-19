<template>
  <div class="proxy-box">
    <h2>Proxy</h2>
    <logs-box ref="logs"></logs-box>
    <button @click="proxyGet">btn</button>
  </div>
</template>

<script>
import LogsBox from '../../Logs/Logs'
export default {
  name: "proxy",
  components: {
    LogsBox
  },
  data() {
    return {
      logs: []
    };
  },
  methods: {
    proxyGet() {
      var person = {
        name: "张三",
        age: 123,
      };

      var proxy = new Proxy(person, {
          get:function(target, property) {
            console.log(target);
            console.log('aaaaaaaaaaaaaaaaaaaaaaa');
            console.log(property);
          }
      })

      proxy.name;
      proxy.age;
      proxy.email;
    },
    addLog(msg) {
      this.$refs.logs.addLog(1111)
    }
  }
};
</script>

<style>
</style>