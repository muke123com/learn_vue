<template>
    <div class="home">
        <div class="component">
            <div class="utils">
                <time-box ids="123">时间：</time-box>
            </div>
            <ul class="link">
                <router-link tag="li" to="/vuex">
                    Vuex
                </router-link>
                <router-link tag="li" to="/learn/css3">
                    css3
                </router-link>
                <router-link tag="li" to="/learn/h5">
                    h5
                </router-link>
                <router-link tag="li" to="/learn/interview">
                    interview
                </router-link>
                <router-link tag="li" to="/router">
                    路由
                </router-link>
                <router-link tag="li" to="/transition">
                    动画
                </router-link>
                <router-link tag="li" to="/learn/lifecycle">
                    lifecycle
                </router-link>
            </ul>
        </div>
        <ul class="learn-modules clearfix">
            <li>
                <h2>组件传值</h2>
                <parent-box></parent-box>
            </li>
            <li>
                <h2>Promise</h2>
                <promise-box></promise-box>
            </li>
            <li>
                <h2>async/await</h2>
                <async-box></async-box>
            </li>
            <li>
                <h2>Less</h2>
                <less-box></less-box>
            </li>
            <li>
                <h2>ArrayFilter</h2>
                <array-filter></array-filter>
            </li>
            <li>
                <h2>ObjectFunction</h2>
                <object-knowledge></object-knowledge>
            </li>
            <li>
                <h2>Class</h2>
                <learn-class></learn-class>
            </li>
            <li>
                <h2>Proxy</h2>
                <learn-proxy></learn-proxy>
            </li>
        </ul>
    </div>
</template>

<script>
    //组件传值
    import ParentBox from '../Learn/componentValue/Parent'
    //promise同步异步
    import PromiseBox from '../Learn/Es6/Promise'
    import AsyncBox from '../Learn/Es6/Async'
    import ArrayFilterBox from '../Learn/Es6/ArrayFilter'
    import LessBox from '../Learn/Less'
    import TransitionBox from '../utils/Transition'
    import timeBox from '../utils/Time'
    import vuexBox from '../Vuex/index'
    import Parent from "../Learn/componentValue/Parent.vue";
    import ArrayFilter from "../Learn/Es6/ArrayFilter.vue";
    import ObjectKnowledge from "../Learn/Es6/ObjectKnowledge.vue";
    import LearnClass from "../Learn/Es6/ClassLearn.vue";
    import LearnProxy from "../Learn/Es6/Proxy.vue"
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
            LearnProxy
        },
        name: 'home',
        data() {
            return {
                msg: '',
                niceMap: [],
            }
        },
        created() {
            let _this = this;
            this.getData();
            this.vm.$on('test', function (msg) {
                _this.msg = msg;
            });
        },
        methods: {
            getData: function () {
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "home.css";
</style>
