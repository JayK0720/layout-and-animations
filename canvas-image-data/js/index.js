const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.crossOrigin = 'anonymous';
image.onload = function(){
	ctx.drawImage(image,0,0,300,300);
}
image.src='./jay.jpeg';

const picker = document.querySelector('.picker');
canvas.addEventListener('mousemove',function(event) {
	event = event || window.event;
	let x = event.clientX, y = event.clientY;
	let pixel = ctx.getImageData(x,y,1,1).data;
	let color = `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3]/255})`;
	picker.style.background = color;
	picker.textContent = color + '';
},false);