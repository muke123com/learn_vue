<template>
    <div class="array-box">
        <div class="array-text">
            <p>原数组：{{list.toString()}}</p>
            <p>新数组：{{newList.toString()}}</p>
            <p>测试返回结果：{{result}}</p>
        </div>
        <div class="btns">
            <a href="javascript:void(0)" class="btn" @click="testMap">map</a>
            <a href="javascript:void(0)" class="btn" @click="testFind" title="返回符合条件的第一个元素的值。">find</a>
            <a href="javascript:void(0)" class="btn" @click="testFindIndex" title="返回符合条件的第一个元素的索引。">findIndex</a>
            <a href="javascript:void(0)" class="btn" @click="testFilter" title="返回符合条件的所有元素。">filter</a>
            <a href="javascript:void(0)" class="btn" @click="testSome" title="检测数组元素中是否有元素符合指定条件。">some</a>
            <a href="javascript:void(0)" class="btn" @click="testEvery" title="检测数值元素的每个元素是否都符合条件。">every</a>
            <a href="javascript:void(0)" class="btn" @click="testSlice" title="可从已有的数组中返回选定的元素。。">slice</a>
            <a href="javascript:void(0)" class="btn" @click="testSplice" title="用于添加或删除数组中的元素。。">splice</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'arrayFilter',
        data(){
            return {
                list: [1,2,5,9,-5,-2,9,-1,1],
                newList: [],
                result: ""
            }
        },
        methods: {
            testMap(){
                this.newList = this.list.map(item=>item*item);
            },
            testFind(){
                this.result = this.list.find((item)=>{
                    return item > 1
                })
            },
            testFindIndex(){
                this.result = this.list.findIndex((item)=>{
                    return item > 1
                })
            },
            testFilter(){
                this.newList = this.list.filter((item)=>{
                    return item > 1
                })
            },
            testSome(){
                this.result = this.list.some((item)=>{
                    return item > 1
                })
            },
            testEvery(){
                this.result = this.list.every((item)=>{
                    return item > 1
                })
            },
            testSlice(){
                this.newList = this.list.slice(1,3);
            },
            testSplice(){
                this.newList = this.list.splice(1,1);
            },
        }
    }
</script>
<style scoped>
    @import "../learn.css";
</style>