let canvas = document.getElementById('Gradient');
canvas.width = 1000;
canvas.height = 1000;
console.log(canvas);
let ctx = canvas.getContext('2d');
ctx.fillStyle = "#EEEEEE";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = "aqua";
// var lineargradient = ctx.createLinearGradient(0,0,350,0);
// lineargradient.addColorStop(0,'blue');
// lineargradient.addColorStop(0.5,'green');
// lineargradient.addColorStop(1,'black');

// ctx.strokeStyle = lineargradient;
// ctx.fillRect(10,10,130,130);
// ctx.lineWidth = 30;
// ctx.moveTo(150,150);
// ctx.lineTo(300,150,)
// ctx.stroke();
ctx.save();
ctx.translate(500,500);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,200);
ctx.moveTo(0,0);
ctx.lineTo(200,0);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.save();  //旋转之前save才是有用的
ctx.arc(0,0,60,0,Math.PI*2/8);
// ctx.lineTo(0,0);
// ctx.closePath();
ctx.fill();
ctx.closePath();

ctx.rotate(Math.PI*2/8);
ctx.restore();

ctx.beginPath();
// ctx.restore();
// // ctx.restore();
// // ctx.restore();//restore可以使旋转回去；
// ctx.moveTo(0,0);
// ctx.lineTo(50,0);
// ctx.stroke();
ctx.fillStyle = 'rgba(0,153,255,0.4)';
ctx.arc(0,0,100,0,Math.PI*2/8);
// ctx.lineTo(0,0);
// ctx.closePath();
ctx.lineTo(0,0);
ctx.closePath();
ctx.fill();


