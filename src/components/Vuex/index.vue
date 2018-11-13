<template>
    <div class="vuex-box">
        <span @click="$store.commit('switch_state')">{{msg}} {{$store.state.home.show}}</span>
    </div>
</template>
<script>
    export default {
        name: 'vuex-box',
        data() {
            return {
                msg: 'aaaaa',
            }
        },
        created() {
            console.log(this.$store.state.home)
        },
    }
</script>