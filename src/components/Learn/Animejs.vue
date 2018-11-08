<template>
    <div class="anime">
        anime
    </div>
</template>

<script>
    import transitionBox from '../utils/Transition'
    import timeBox from '../utils/Time'
    import TransitionBox from "../utils/Transition.vue";
    export default {
        components: {
            TransitionBox,
            timeBox
        },
        name: 'anime',
        data() {
            return {
                msg: '111',
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
    @import "learn.css";
</style>
