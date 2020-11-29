const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.onload = function(){
	ctx.drawImage(image,0,0,300,300);
}
image.src = './jay.jpeg';

function invert(){
	ctx.drawImage(image,0,0,canvas.width,canvas.height);
	const image_data = ctx.getImageData(0,0,canvas.width,canvas.height);
	const data = image_data.data;
	for(let i = 0, length = data.length; i < length; i+=4){
		data[i] = 255 - data[i];
		data[i+1] = 255 - data[i+1];
		data[i+2] = 255 - data[i+2];
	}
	ctx.putImageData(image_data,0,0);
}

function grayscale(){
	ctx.drawImage(image,0,0,canvas.width,canvas.height);
	const image_data = ctx.getImageData(0,0,canvas.width,canvas.height);
	const data = image_data.data;
	for(let i = 0, length = data.length; i < length; i+=4){
		let avg = (data[i] + data[i+1] + data[i+2]) / 3;
		data[i] = avg; data[i+1] = avg; data[i+2] = avg;
	}
	ctx.putImageData(image_data,0,0);
}

const radio = document.querySelectorAll('input');
for(let i = 0; i < radio.length; i++){
	radio[i].addEventListener('change',function(event){
		event = event || window.event;
		switch(event.target.value){
			case 'invert':
				invert();
				break;
			case 'grayscale':
				grayscale();
				break;
		}
	})
}