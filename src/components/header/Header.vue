<template>
    <div class="header">
        <h1 class="title">
            <router-link to="/">
                {{ $store.state.common.title }}
            </router-link>
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'header-box',
        data() {
            return {
                msg: ''
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "header.css";
</style>
