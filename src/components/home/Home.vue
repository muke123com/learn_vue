<template>
    <div class="container">
        <h1 class="title">{{ msg }}</h1>
        <div class="css-test">css测试</div>
        <img src="../../assets/logo.png"/>
        <ul class="nice">
            <li v-for="item in niceMap">{{item['num']}} {{item['name']}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                msg: '123',
                niceMap: []
            }
        },
        created() {
            this.getData();
            console.log(this.common);
        },
        methods: {
            getData: function () {
                this.niceMap = niceMap;
                console.log(niceMap);
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "home.css";
</style>
