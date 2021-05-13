//第一张画布相关参数
let canvas = document.getElementById('line')
	console.log(canvas)
let ctx = canvas.getContext('2d');
	ctx.translate(250,250);
let counter = 1;
	// ctx.fillStyle = '#EEEEEE';
	// ctx.fillRect(-canvas.width, -canvas.height, 2 * canvas.width,2 * canvas.height);
let text = ['一等奖','二等奖','三等奖','四等奖','五等奖',"六等奖","七等奖","八等奖"];

//第二章画布
let canvas2 = document.getElementById('pointer');
	console.log(canvas2)
let ctx2 = canvas2.getContext('2d');
    ctx2.translate(250,250);
	
	
//圆盘的配色不好看
//中间的指针如何才能不动啊--双层画布解决了此问题
//设置渐变色
//大盘线段粗厚不一样
//ctx.save,ctx.restore方法使用
//抽奖停止以后，程序怎么知道抽中了什么奖品？

drawMid(ctx2);
drawPan(ctx, text);
drawText(ctx, text);


canvas2.addEventListener('click',function(e){
  let event = new Event("click", {bubbles: true}); // (2)
  canvas.dispatchEvent(event);
});
window.addEventListener('click',function(e){
	counter = (Math.random() * 10);
    draw(ctx, text);
});


function draw(ctx, text){
	ctx.clearRect(-canvas.width, -canvas.height, canvas.width, canvas.height);
	drawPanAndTest(ctx, text);
	ctx.rotate(Math.PI*2/180);
	counter ++;
	if (counter < 300) {
		requestAnimationFrame(()=>draw(ctx,text));
	} 
}

function drawPanAndTest(ctx, text) {
	ctx.rotate(Math.PI*2/180);
    drawPan(ctx, text);
	drawText(ctx, text);
}

function drawText(ctx, text) {
	for (let i = 1; i < 9; i++) {
		// ctx.save();
		ctx.beginPath();
		// ctx.lineTo(0, -200);
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "black";
		ctx.font = "20px Microsoft YaHei";
		ctx.closePath();
 		ctx.fillText(text[i-1],0,-170,60);
		ctx.rotate(Math.PI*2/8);
	}
}

function drawMid(ctx) {
	ctx.beginPath();
	ctx.arc(0,0,50,0,Math.PI* 2);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.moveTo(0, -100);
	ctx.quadraticCurveTo(-10, -30, -30, -40);
	ctx.lineTo(30, -40);
	ctx.quadraticCurveTo(10, -30, 0, -100);
	ctx.closePath();
	ctx.fill();

	ctx.fillStyle = "black";
	ctx.font = "20px Microsoft YaHei";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("抽奖",0,0,60);
}

function drawPan(ctx, text) {
	let lingrad = ctx.createLinearGradient(0,0,0,100);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(0.5, 'yellow');
    lingrad.addColorStop(1, '#00ABEB');
	let radgrad = ctx.createRadialGradient(0,0,220,0,0,228);
	 radgrad.addColorStop(0, '#F4F201');
	 radgrad.addColorStop(0.8,  '#00ABEB');
	 radgrad.addColorStop(1, 'rgba(159,159,159,0.5)');
	 
	for (let i = 1; i < 9; i++) {
		// ctx.save();
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineWidth = 8;
		ctx.fillStyle = "red";
		ctx.strokeStyle = radgrad;
        ctx.arc(0,0,220,-Math.PI*2/16,Math.PI*2/16);
		ctx.closePath();//封闭曲线，保证粗细一致
		ctx.fill();
		ctx.stroke();
		ctx.rotate(Math.PI*2/8);
	}
}



