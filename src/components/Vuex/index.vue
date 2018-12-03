<template>
    <div class="container vuex">
        <div class="top">
            <p>{{$store.state.test.msg}}</p>
            <p>{{$store.getters.test_arr}}</p>
        </div>
        <div class="btns">
            <a href="javascript:void(0)" @click="test_mutations">mutations</a>
            <a href="javascript:void(0)" @click="test_actions">actions</a>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg: 'vuex'
            }
        },
        created(){
            this.init()
        },
        methods: {
            init(){
                this.$store.commit('change_title', {title: 'vuex'})
            },
            test_mutations(){
                this.$store.commit('test_mutations');
            },
            test_actions(){
                this.$store.dispatch('test_actions');
            },
        }
    }
</script>
<style scoped>
    @import "vuex.css";
</style>