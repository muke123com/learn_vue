<template>
    <div class="index-box">
        <div id="canvas" class="canvas"></div>
        <ul class="link">
            <router-link v-for="(item, index) in list" :key="index" tag="li" :to="item['href']">
                {{item['title']}}
            </router-link>
        </ul>
    </div>
</template>
<script>
    import * as THREE from 'three'

    export default {
        data() {
            return {
                list: [
                    { title: 'Vuex', href: '/vuex' },
                    { title: 'css3', href: '/learn/css3' },
                    { title: 'h5', href: '/learn/h5' },
                    { title: 'interview', href: '/learn/interview' },
                    { title: '路由', href: '/router' },
                    { title: '动画', href: '/transition' },
                    { title: 'lifecycle', href: '/learn/lifecycle' },
                ]
            }
        },
        created(){

        },
        mounted(){
        },
        methods: {
            init(){

            },
        }
    }
</script>
<style>
    @import "index.less";
</style>