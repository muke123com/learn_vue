<template>
    <div class="calc-box">
        <ul>
           <li><input type="number" v-model="num1" /></li>
           <li><input type="number" v-model="num2" /></li>
           <li>{{total}}</li>
            <li>{{msg}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'calc-box',
        data() {
            return {
                num1: 0,
                num2: 0,
                msg: ''
            }
        },
        watch: {
            total(){
                this.msg = '计算：' + this.num1 + '+' + this.num2 + '=' + this.total
            }
        },
        computed:{
            total(){
                return Number(this.num1) + Number(this.num2);
            }
        },
        methods: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "utils.css";
</style>
