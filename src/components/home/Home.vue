<template>
    <div class="home">
        <img src="../../assets/logo.png"/>
        <ul class="nice">
            <li v-for="item in niceMap">
                {{item['num']}} {{item['name']}}
            </li>
        </ul>
        <div class="utils">
            <time-box ids="123">slot插槽</time-box>
            <span>{{msg}}</span>
            <transition-box></transition-box>
        </div>
        <router-link to="/learn/anime">
            <button class="btn btn-default">anime</button>
        </router-link>
    </div>
</template>

<script>
    import transitionBox from '../utils/Transition'
    import timeBox from '../utils/Time'
    import TransitionBox from "../utils/Transition.vue";
    export default {
        components: {
            TransitionBox,
            timeBox
        },
        name: 'home',
        data() {
            return {
                msg: '',
                niceMap: []
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
                this.niceMap = niceMap;
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "home.css";
</style>
