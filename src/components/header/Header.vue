<template>
    <div class="header">
        <h1 class="title">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'header-box',
        data() {
            return {
                msg: 'header'
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
