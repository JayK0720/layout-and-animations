const canvas = document.getElementById('canvas_2');
const ctx = canvas.getContext('2d');

function draw_clock(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.save()
	ctx.beginPath();
	ctx.translate(canvas.width/2,canvas.height/2);
	ctx.lineWidth = 8;
	ctx.strokeStyle = '#2c59a7';
	ctx.arc(0,0,120,0,Math.PI*2,false);
	ctx.stroke();
	ctx.save();
	// 绘制分刻度
	for(let i = 0; i < 60; i++){
		ctx.strokeStyle = '#000000';
		ctx.lineWidth = 3;
		if(i % 5 != 0){
			ctx.beginPath();
			ctx.moveTo(0,-110);
			ctx.lineTo(0,-116);
			ctx.stroke()
		}
		ctx.rotate(Math.PI/30);
	}
	ctx.restore();
	ctx.save();
	// 绘制小时刻度
	for(let i = 0; i < 12; i++){
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(0,-108);
		ctx.lineTo(0,-116);
		ctx.stroke();
		ctx.rotate(Math.PI/6);
	}
	ctx.restore();
	
	let date = new Date();
	let [hour,minute,seconds,millseconds] = [date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()];
	hour = hour > 12 ? hour - 12 : hour;
	minute = minute < 10 ? '0'+minute : minute;
	seconds = seconds < 10 ? '0'+seconds : seconds;
	
	ctx.save();
	ctx.beginPath();
	ctx.rotate( (hour+minute/60) * Math.PI/6  - Math.PI/2)
	ctx.lineWidth = 5;
	ctx.strokeStyle = 'red';
	ctx.lineCap = 'round'
	ctx.moveTo(-6,0);
	ctx.lineTo(58,0);
	ctx.stroke();
	ctx.restore();
	
	ctx.save();
	ctx.beginPath();
	ctx.rotate( (minute*6-90) * Math.PI/180);
	ctx.strokeStyle = 'red';
	ctx.lineCap = 'round';
	ctx.lineWidth = 5;
	ctx.moveTo(-10,0);
	ctx.lineTo(86,0);
	ctx.stroke();
	ctx.restore();
	
	ctx.save();
	ctx.beginPath();
	ctx.rotate( ((seconds*1000+millseconds)/1000 *6 - 90) * Math.PI/180  );
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'red';
	ctx.lineCap = 'round';
	ctx.moveTo(-10,0);
	ctx.lineTo(96,0);
	ctx.stroke();
	ctx.restore();
	
	ctx.beginPath();
	ctx.fillStyle = 'yellow';
	ctx.arc(0,0,5,0,Math.PI * 2,false);
	ctx.fill()
	
	ctx.restore();
	ctx.font = '20px serif';
	ctx.strokeStyle = 'hotpink';
	ctx.textAlign = 'center';
	ctx.strokeText('Hello World',canvas.width/2,190);
	
	ctx.font = '18px serif';
	ctx.fillStyle = 'skyblue';
	ctx.textAlign = 'center';
	let time_text = date.getHours() + ':' + minute + ':' + seconds;
	ctx.fillText(time_text,canvas.width/2,210);
	window.requestAnimationFrame(draw_clock)
}

draw_clock();