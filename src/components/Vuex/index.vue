<template>
    <div class="container vuex">
        <div class="top">
            <p>{{msg}}</p>
            <p>{{test_arr}}</p>
        </div>
        <div class="btns">
            <a href="javascript:void(0)" @click="test_mutations">mutations</a>
            <a href="javascript:void(0)" @click="test_actions">actions</a>
        </div>

    </div>
</template>
<script>
    import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
    export default {
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                msg: state=>state.test.msg
            }),
            ...mapGetters(['test_arr']),
//            msg() {
//                return this.$store.state.test.msg
//            },
//            test_arr() {
//                return this.$store.getters.test_arr
//            }
        },
        created(){
            this.init()
        },
        methods: {
            init(){
                this.change_title({title: 'vuex'})
            },
            ...mapMutations(['test_mutations','change_title']),
            ...mapActions(['test_actions']),
//            test_mutations(){
//                this.$store.commit('test_mutations');
//            },
//            test_actions(){
//                this.$store.dispatch('test_actions');
//            },
        }
    }
</script>
<style scoped>
    @import "vuex.css";
</style>