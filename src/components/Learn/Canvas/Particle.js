class Particle {
    constructor(x,y, color){
        this.x = x * 2 + (Math.random() - 0.5)*10;
        this.y = y * 2 + (Math.random() - 0.5)*10;
        this.radius = 1;
        this.rv = 0;
        this.color = color;
    }
    draw(ctx){
        let x,y;
        let n = 2;
        x = this.x;
        y = this.y;
        ctx.beginPath();
        ctx.arc(x,y,this.radius,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill()
    }
    update(ctx){
        this.draw(ctx);
    }
}

export default Particle