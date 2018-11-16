<template>
    <div class="state-box">
        <span>{{msg}}</span>
        <span style="color: #ff7200">{{count}}</span>
    </div>
</template>
<script>
    export default {
        name: 'vuex-state',
        data() {
            return {
                msg: 'vuex-state组件',
            }
        },
        computed: {
            count() {
                return this.$store.state.vuex.count
            }
        }
    }
</script>
<style scoped>
    @import "vuex.css";
</style>