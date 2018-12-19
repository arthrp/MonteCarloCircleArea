class CircleAreaCalculator {
    constructor(private _canv: any, private _ctx: any) {}

    private _pointsInCircle = 0;
    private _pointsTotal = 0;

    public run(): void {
        let canv = this._canv;
        let totalArea = canv.width * canv.height;

        const radius = canv.width/2;
        const centerX = canv.width/2;
        const centerY = canv.height/2;
        const redColor = "#FF0000";
        const greenColor = "#008B00";

        for(let i = 0; i < 1000000; i++){
            this.drawPoint(this._ctx,canv,centerX,centerY,radius,greenColor,redColor);
        }

        const ratio = (this._pointsInCircle/this._pointsTotal);
        (<any>(document.querySelector("#ratio"))).innerText = ratio;
        (<any>(document.querySelector("#squareArea"))).innerText = totalArea;
        (<any>(document.querySelector("#circle-area"))).innerText = ratio * totalArea;
        (<any>(document.querySelector("#circle-area-real"))).innerText = Math.PI*(radius*radius);
    }
    
    private drawPoint(ctx,canv,centerX,centerY,radius,greenColor,redColor): void {
        var pointX = Random.getRandomInt(0,canv.width);
        var pointY = Random.getRandomInt(0,canv.height);
      
        var isInCircle = this.isPointInCircle(pointX,pointY,centerX,centerY,radius);
        if(isInCircle)
          this._pointsInCircle++;
      
        this._pointsTotal++;
      
        ctx.fillStyle = this.isPointInCircle(pointX,pointY,centerX,centerY,radius) ? greenColor : redColor;
        ctx.fillRect(pointX,pointY,1,1);
    }

    private isPointInCircle(x,y,circleCenterX,circleCenterY,rad): boolean {
        return Math.pow((x - circleCenterX), 2) + Math.pow((y - circleCenterY),2) < Math.pow(rad,2);
    }
}