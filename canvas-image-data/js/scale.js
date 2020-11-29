const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.onload = function() {
	ctx.drawImage(image,0,0,canvas.width,canvas.height);
}
image.src = './jay.jpeg';
let top_y = canvas.getBoundingClientRect();
const scale = document.querySelector('.scale');
const scale_ctx = scale.getContext('2d');
canvas.addEventListener('mousemove',function(event) {
	event = event || window.event;
	let x = event.clientX , y = event.clientY;
	if(x >= 200) x = 200;
	if(y - top_y >= 200) y = 200 + top_y;
	scale_ctx.drawImage(canvas,x,y,100,100,0,0,200,200)
})