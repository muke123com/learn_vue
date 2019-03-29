<template>
    <div class="canvas-box" id="canvas-box">
        <div>
            <input type="text" v-model="text" />
            <button type="button" @click="start()">开始</button>
        </div>
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
    let canvas, ctx;
    export default {
        data(){
            return {
                text: "1",
                points: [],
                anime: ''
            }
        },
        watch: {
            text(){
//                this.textToImage();
            }
        },
        mounted(){
            canvas = document.getElementById("canvas");
            canvas.width = 800;
            canvas.height = 640;
            ctx = canvas.getContext("2d");
//            this.start();
        },
        methods: {
            start(){
                let _this = this;
                this.points = [];
                this.textToImage();
                window.cancelAnimationFrame(_this.anime);
                this.drawFrame();
            },
            drawFrame(){
                let _this = this;
                this.anime = window.requestAnimationFrame(_this.drawFrame, canvas);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                this.points.map((p)=>{
                    p.update(ctx);
                })
            },
            textToImage(){
                let _this = this;
                let fontSize = 30;
                let text_canvas = document.createElement('canvas');
                let text_ctx = text_canvas.getContext("2d");

                text_canvas.id = 'text_canvas';
                text_canvas.height = fontSize;
                text_ctx.font = fontSize + "px arial";
                text_canvas.width = text_ctx.measureText(_this.text).width;
                text_ctx.font = fontSize + "px arial";
                text_ctx.fillStyle = "#ff4200";
                text_ctx.fillText(_this.text, 0, fontSize/5*4);
                this.getImagedata(text_canvas, text_ctx);
            },
            // 获取imageData
            getImagedata(text_canvas, text_ctx) {
                let _this = this;
                let img = new Image();
                img.src = text_canvas.toDataURL("image/jpeg");
                img.onload = function () {
                    let imgData = text_ctx.getImageData(0,0,this.width,this.height);
                    let buffer32 = new Uint32Array(imgData.data.buffer);
                    for(let i=0;i<img.width;i+=2){
                        for(let j=0;j<img.height;j+=2){
                            if(buffer32[j * img.width + i]){
                                let p = new Point(i,j);
                                _this.points.push(p);
                            }
                        }
                    }
                }
            },
        }
    }
    let colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722'
    ];
    class Point {
        constructor(x,y){
            this.x = x;
            this.y = y;
            this.radius = Math.random()*6 + 1;
            this.rv = 0.05;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        draw(ctx){
            let x,y;
            let n = 5;
            x = this.x*n + 50;
            y = this.y*n + 50;
            ctx.beginPath();
            ctx.arc(x,y,this.radius,0,Math.PI*2);
            ctx.fillStyle = this.color;
            ctx.fill()
        }
        update(ctx){
            this.radius += this.rv;
            if(this.radius >= 4){
                this.rv = -Math.abs(this.rv);
            }else if(this.radius <= 2){
                this.rv = Math.abs(this.rv);
            }
            this.draw(ctx);
        }
    }
</script>