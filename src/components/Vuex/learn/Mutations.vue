<template>
    <div class="box mutations-box">
        <a href="javascript:void(0)" @click="changeState">$store.commit</a>
        <a href="javascript:void(0)" @click="changeStateByMapMutations">mapMutations</a>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return {

            }
        },
        computed: {

        },
        methods: {
            //
            changeState(){
                this.$store.commit('ADD_LOGS', '通过this.$store.commit触发mutation改变state')
            },
            changeStateByMapMutations(){
                this.ADD_LOGS('通过mapMutations触发mutation改变state')
            },
            ...mapMutations(['ADD_LOGS'])
        }
    }
</script>
<style scoped>
    @import "../index.less";
</style>