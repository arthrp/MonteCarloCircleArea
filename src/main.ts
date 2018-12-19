const canv: any = document.querySelector("#main-canvas");
const ctx = canv.getContext("2d");

new CircleAreaCalculator(canv,ctx).run();