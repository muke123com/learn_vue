<template>
    <div class="home">
        <div class="component">
            <div class="utils">
                <time-box ids="123">时间：</time-box>
            </div>
            <ul class="link">
                <router-link tag="li" to="/learn/css3">
                    css3
                </router-link>
                <router-link tag="li" to="/learn/anime">
                    anime
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
        </ul>
    </div>
</template>

<script>
    import ParentBox from '../Learn/componentValue/Parent'
    import TransitionBox from '../utils/Transition'
    import timeBox from '../utils/Time'
    import vuexBox from '../Vuex/index'
    import Parent from "../Learn/componentValue/Parent.vue";
    export default {
        components: {

            ParentBox,
            TransitionBox,
            timeBox,
            vuexBox
        },
        name: 'home',
        data() {
            return {
                msg: '',
                niceMap: [],
                list: new Array(9)
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
