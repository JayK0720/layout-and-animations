# canvas像素操作
	
		在对canvas像素操作时不能直接操作imageData
			wrong: const image_data = ctx.getImageData(0,0,canvas.width,canvas.height).data;
			
			correct: const image_data = ctx.getImageData(0,0,,canvas.width,canvas.height);	
							const data = image_data.data;
			对data数组进行每个像素点的操作后再使用putImageData到canvas上。
			
[案例来源](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)