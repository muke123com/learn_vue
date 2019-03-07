<template>
    <div class="learn-css3 w-center">
        <div class="box">
            <h2>flex 布局</h2>
            <ul id="flex-box" class="flex-box">
                <li v-for="(value, key, index) in testList">{{key + 1}}</li>
            </ul>
            <div class="attr-list clearfix">
                <div class="left">
                    <span v-for="(value, key, index) in flexList"
                          :class="{active:key == selectedFlexAttr}"
                          :data-key="key"
                          @click="selectKey">{{key}}</span>
                </div>
                <div class="right">
                    <span v-for="value in flexList[selectedFlexAttr]"
                          :class="{active:value == cssStyle[selectedFlexAttr]}"
                          :data-key="value"
                          @click="selectValue">{{value}}</span>
                </div>
            </div>
            <div class="show-css" v-html="showCssStr">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'css3',
        data() {
            return {
                msg: 'life',
                flexList: {},
                selectedFlexAttr: 'display',
                selectedFlexValue: 'flex',
                cssStyle: {
                    'display': 'flex',
                    'flex-direction': 'row',
                },
                showCssStr: '',
                testList: new Array(30)
            }
        },
        watch: {
            selectedFlexValue() {
                this.setCssStyle();
                console.log(this.selectedFlexValue);
            }
        },
        created(){
            this.getCssList();
            this.setCssStyle();
        },
        methods: {
            getCssList(){
                let cssList = {
                    'display': [
                        'flex',
                    ],
                    'flex-direction': [
                        'row',
                        'row-reverse',
                        'column',
                        'column-reverse',
                    ],
                    'flex-wrap': [
                        'nowrap',
                        'wrap',
                        'wrap-reverse',
                    ],
                    'justify-content': [
                        'flex-start',
                        'flex-end',
                        'center',
                        'space-between',
                        'space-around'
                    ],
                    'align-items': [
                        'flex-start',
                        'flex-end',
                        'center',
                        'baseline',
                        'stretch'
                    ],
                    'align-content': [
                        'flex-start',
                        'flex-end',
                        'center',
                        'space-between',
                        'space-around'
                    ],
                };
                this.flexList = cssList;
            },
            selectKey(e){
                this.selectedFlexAttr = e.currentTarget.dataset.key;
            },
            selectValue(e){
                this.selectedFlexValue = e.currentTarget.dataset.key;
            },
            setCssStyle(){
                this.$set(this.cssStyle, this.selectedFlexAttr, this.selectedFlexValue);
                let cssStr = '';
                for(let key in this.cssStyle){
                    cssStr += key + ":" + this.cssStyle[key] + ";"
                }
                this.showCssStr = cssStr.replace(/;/g, ";<br>");
                this.$nextTick(() => {
                    document.getElementById("flex-box").setAttribute("style", cssStr);
                });
            }
        }
    }
</script>
<style scoped>
    @import "learn.css";
</style>