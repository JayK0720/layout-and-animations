const canvas_1 = document.getElementById('canvas_1');
const ctx_1 = canvas_1.getContext('2d');

function format_date(date,fmt){
	if( (/(y+)/).test(fmt) ){
		fmt = fmt.replace( RegExp.$1, (date.getFullYear()+"").substring(4 - RegExp.$1.length) );
	}
	let o = {
		'M+':date.getMonth() + 1,
		'd+':date.getDate(),
		'h+':date.getHours(),
		'm+':date.getMinutes(),
		's+':date.getSeconds()
	}
	for(let key in o) {
		if( new RegExp('(' + key + ')').test(fmt) ){
			fmt = fmt.replace( RegExp.$1 , RegExp.$1.length > 1 ? paddingLeftZero(o[key]) : o[key] )
		}
	}
	return fmt;
}

function paddingLeftZero(str){
	return ('00' + str).substring( (str+'').length )
}

function draw_time(){
	ctx_1.clearRect(0,0,canvas_1.width,canvas_1.height);
	// 绘制渐变
	const radial = ctx_1.createRadialGradient(150,150,20,150,150,150);
	radial.addColorStop(0,'#03303a');
	radial.addColorStop(1,'black');
	ctx_1.fillStyle = radial;
	ctx_1.fillRect(0,0,canvas_1.width,canvas_1.height);
	// 获取当前的日期和时间并 设置绘制字体颜色和位置
	ctx_1.fillStyle = '#00ffff';
	ctx_1.font = '24px serif';
	ctx_1.textAlign = 'center';
	let date = format_date(new Date(),'yyyy-MM-dd');
	let time = format_date(new Date(),'hh:mm:ss');
	ctx_1.fillText(date,canvas_1.width/2,140);
	ctx_1.font = '20px serif';
	ctx_1.fillText(time,canvas_1.width/2,165);
	const linear = ctx_1.createLinearGradient(0,0,canvas_1.width,0);
	linear.addColorStop(0,'magenta');
	linear.addColorStop(0.5,'blue');
	linear.addColorStop(1,'red');
	ctx_1.font = '14px serif';
	ctx_1.fillStyle = linear;
	ctx_1.fillText('keep learning and coding',canvas_1.width/2,185);
	// 绘制圆弧
	ctx_1.beginPath();
	ctx_1.lineWidth = 12;
	ctx_1.strokeStyle = '#00ffff';
	let hour = new Date().getHours();
	// 24小时制,注意绘制的起点向后倒退90度,那么终点也要减去90度
	ctx_1.arc(canvas_1.width/2,canvas_1.height/2,130,270*Math.PI/180,(hour*15-90)*Math.PI/180,false);
	ctx_1.stroke();
	window.requestAnimationFrame(draw_time);
}
draw_time();

