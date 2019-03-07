<template>
    <div class="parent-box">
        <h3>{{msg}}</h3>
        <div class="child-boxes">
            <child1-box></child1-box>
            <child1-box></child1-box>
            <child2-box></child2-box>
            <child2-box></child2-box>
        </div>
    </div>
</template>
<script>
    import Child1Box from './Child1';
    import Child2Box from './Child2';
    export default {
        components: {
            Child1Box,
            Child2Box
        },
        name: 'parent',
        data() {
            return {
                msg: 'parent',
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>