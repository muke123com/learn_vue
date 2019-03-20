<template>
    <div class="canvas-box">
        <canvas id="canvas"></canvas>
        <div class="btns">
            <a href="javascript:void(0)" @click="drawCircle">圆形</a>
            <a href="javascript:void(0)" @click="drawRect">矩形</a>
            <a href="javascript:void(0)" @click="drawLine">直线</a>
            <a href="javascript:void(0)" @click="drawImage">图片</a>
            <a href="javascript:void(0)" @click="checkPointIn">isPointIn</a>
        </div>
    </div>
</template>
<script>
    const cW = 600;
    const cH = 300;
    const color = "#ff4422";
    export default {
        data(){
            return {
                canvas: '',
                ctx: ''
            }
        },
        mounted(){
            this.canvas = document.getElementById("canvas");
            this.canvas.width = cW;
            this.canvas.height = cH;
            this.ctx = this.canvas.getContext("2d");
        },
        methods: {
            drawCircle(){
                let ctx = this.ctx;
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.arc(50,50,50,0, Math.PI*2);
                ctx.fill();
                ctx.closePath();
            },
            drawRect(){
                let ctx = this.ctx;
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(100, 0, 100, 100);
                ctx.fill();
                ctx.closePath();
            },
            drawLine(){
                let ctx = this.ctx;
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.moveTo(210, 10);
                ctx.lineTo(290, 10);
                ctx.lineTo(210, 100);
                ctx.lineTo(290, 100);
                ctx.stroke();
                ctx.closePath();
            },
            drawImage(){
                let ctx = this.ctx;
                let img = new Image();
                img.src = require("@/assets/logo.png");
                img.width = 100;
                img.onload = function () {
                    ctx.beginPath();
                    ctx.drawImage(img, 300, 0, 100, 100);
                    ctx.closePath();
                };
                img.onerror = function(e){console.log(e)};
            },
            checkPointIn(){
                let x = 150;
                let y = 50;
                let ctx = this.ctx;
                let a = ctx.isPointInPath(x,y);
                console.log(a);
            }
        }
    }
</script>
<style scoped>
    @import "h5.less";
</style>