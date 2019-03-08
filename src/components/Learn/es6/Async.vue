<template>
    <div class="async-box">
        <a href="javascript:void(0)" class="btn"></a>
    </div>
</template>
<script>
    export default {
        name: 'async',
        data(){
            return {
                msg: ''
            }
        },
        methods: {
            testAsync() {
                // async 用于表示函数是一个异步函数
                async function afn() {
                    return "后执行"
                }
                afn();
                console.log("在后面但先执行")
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>