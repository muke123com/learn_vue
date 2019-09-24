<template>
  <div class="home">
    <div class="component">
      <div class="utils">
        <time-box ids="123"></time-box>
      </div>
      <ul class="link">
        <a @click="goAnchor('#c1')">组件传值</a>
        <a @click="goAnchor('#c2')">Promise</a>
        <a @click="goAnchor('#c3')">async/await</a>
        <a @click="goAnchor('#c4')">ArrayFilter</a>
        <a @click="goAnchor('#c5')">ObjectFunction</a>
        <a @click="goAnchor('#c6')">Class</a>
        <a @click="goAnchor('#c7')">Proxy</a>
        <a @click="goAnchor('#c8')">Worker</a>
      </ul>
    </div>
    <ul class="learn-modules clearfix">
      <li>
        <h2 id="c1">组件传值</h2>
        <parent-box></parent-box>
      </li>
      <li>
        <h2 id="c2">Promise</h2>
        <promise-box></promise-box>
      </li>
      <li>
        <h2 id="c3">async/await</h2>
        <async-box></async-box>
      </li>
      <li>
        <h2 id="c4">ArrayFilter</h2>
        <array-filter></array-filter>
      </li>
      <li>
        <h2 id="c5">ObjectFunction</h2>
        <object-knowledge></object-knowledge>
      </li>
      <li>
        <h2 id="c6">Class</h2>
        <learn-class></learn-class>
      </li>
      <li>
        <h2 id="c7">Proxy</h2>
        <learn-proxy></learn-proxy>
      </li>
      <li>
        <h2 id="c8">Worker</h2>
        <learn-worker></learn-worker>
      </li>
    </ul>
  </div>
</template>

<script>
//组件传值
import ParentBox from "../Learn/componentValue/Parent";
//promise同步异步
import PromiseBox from "../Learn/Es6/Promise";
import AsyncBox from "../Learn/Es6/Async";
import ArrayFilterBox from "../Learn/Es6/ArrayFilter";
import LessBox from "../Learn/Less";
import TransitionBox from "../utils/Transition";
import timeBox from "../utils/Time";
import vuexBox from "../Vuex/index";
import Parent from "../Learn/componentValue/Parent.vue";
import ArrayFilter from "../Learn/Es6/ArrayFilter.vue";
import ObjectKnowledge from "../Learn/Es6/ObjectKnowledge.vue";
import LearnClass from "../Learn/Es6/ClassLearn.vue";
import LearnProxy from "../Learn/Es6/Proxy.vue";
import LearnWorker from "../Learn/Es6/Work.vue";
export default {
  components: {
    LearnClass,
    ObjectKnowledge,
    ArrayFilter,
    ParentBox,
    PromiseBox,
    AsyncBox,
    LessBox,
    TransitionBox,
    timeBox,
    vuexBox,
    LearnProxy,
    LearnWorker
  },
  name: "home",
  data() {
    return {
      msg: "",
      niceMap: []
    };
  },
  created() {
    let _this = this;
    this.getData();
    this.vm.$on("test", function(msg) {
      _this.msg = msg;
    });
  },
  methods: {
    //锚点跳转
    goAnchor(selector, index) {
      this.activeBtn = index;
      this.$el.querySelector(selector).scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "home.css";
</style>
