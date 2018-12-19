class CircleAreaCalculator {
    constructor(_canv, _ctx) {
        this._canv = _canv;
        this._ctx = _ctx;
        this._pointsInCircle = 0;
        this._pointsTotal = 0;
    }
    run() {
        let canv = this._canv;
        let totalArea = canv.width * canv.height;
        const radius = canv.width / 2;
        const centerX = canv.width / 2;
        const centerY = canv.height / 2;
        const redColor = "#FF0000";
        const greenColor = "#008B00";
        for (let i = 0; i < 1000000; i++) {
            this.drawPoint(this._ctx, canv, centerX, centerY, radius, greenColor, redColor);
        }
        const ratio = (this._pointsInCircle / this._pointsTotal);
        (document.querySelector("#ratio")).innerText = ratio;
        (document.querySelector("#squareArea")).innerText = totalArea;
        (document.querySelector("#circle-area")).innerText = ratio * totalArea;
        (document.querySelector("#circle-area-real")).innerText = Math.PI * (radius * radius);
    }
    drawPoint(ctx, canv, centerX, centerY, radius, greenColor, redColor) {
        var pointX = Random.getRandomInt(0, canv.width);
        var pointY = Random.getRandomInt(0, canv.height);
        var isInCircle = this.isPointInCircle(pointX, pointY, centerX, centerY, radius);
        if (isInCircle)
            this._pointsInCircle++;
        this._pointsTotal++;
        ctx.fillStyle = this.isPointInCircle(pointX, pointY, centerX, centerY, radius) ? greenColor : redColor;
        ctx.fillRect(pointX, pointY, 1, 1);
    }
    isPointInCircle(x, y, circleCenterX, circleCenterY, rad) {
        return Math.pow((x - circleCenterX), 2) + Math.pow((y - circleCenterY), 2) < Math.pow(rad, 2);
    }
}
//# sourceMappingURL=circleAreaCalculator.js.map