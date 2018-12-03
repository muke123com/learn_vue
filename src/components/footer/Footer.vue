<template>
    <div class="footer" style="display: none">
        <h1 class="title">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'footer-box',
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
    @import "footer.css";
</style>
