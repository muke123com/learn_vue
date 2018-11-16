<template>
    <div class="vuex-box">
        <span @click="$store.commit('add_count')">增加count</span>
        <vuex-state></vuex-state>
    </div>
</template>
<script>
    import VuexState from "./state.vue";

    export default {
        components: {VuexState},
        name: 'vuex-box',
        data() {
            return {
                msg: 'aaaaa',
            }
        },
        created() {
        },
    }
</script>