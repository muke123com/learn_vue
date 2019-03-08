<template>
    <div class="async-box">
        <div class="btns">
            <a href="javascript:void(0)" class="btn" @click="testAsync">测试异步</a>
        </div>
        <div class="logs">
            <p v-for="log in logs">{{log}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'async',
        data(){
            return {
                msg: '',
                logs: []
            }
        },
        methods: {
            testAsync() {
                // async 用于表示函数是一个异步函数
                async function afn() {
                    return "后执行";
                }
                console.log(afn());
                afn().then((value) => {
                    this.log(value)
                });
                this.log("在后面但先执行");
            },
            testAsyncAwait
            log(msg) {
                this.logs.push(msg)
            }
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>