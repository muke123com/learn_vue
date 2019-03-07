<template>
    <div class="footer">
        <audio src="/static/xxs.mp3" autoplay="autoplay" controls style="margin-top: 5px; width: 100%"></audio>
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
