<template>
    <div class="vuex-box">
        {{msg}}
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