const aLi = document.querySelectorAll("li");
const oList = document.querySelector(".website-list");
const oContainer = document.querySelector(".container");
const position_array = [];
for(let i = 0, length = aLi.length; i < length; i++){
	position_array.push({
		x:aLi[i].offsetLeft,
		y:aLi[i].offsetTop
	})
	setTimeout(() => {
		aLi[i].style.cssText = `position:absolute;margin:0;left:${position_array[i]['x']}px;top:${position_array[i]['y']}px;`
	},10);
}
oList.addEventListener('mousedown',drag,false);
document.addEventListener('mousemove',drag,false);
document.addEventListener('mouseup',drag,false);
let flag = false;	// 判断是否点击了
let startX,startY,x1,y1,element,gobal,isExit;
function drag(event){
	event = event || window.event;
	event.preventDefault();
	switch(event.type){
		case "mousedown":
			element = event.target.parentNode;
			if(element.tagName == 'LI'){
				flag = true;
				startX = element.offsetLeft,startY = element.offsetTop,x1 = event.clientX,y1 = event.clientY;
				element.style.zIndex = 1000;
			}
			break;
		case "mousemove":
			if(!flag) return;
			let x2 = event.clientX, y2 = event.clientY,delX,delY;
			element.style.left = startX + x2 - x1 + 'px';
			element.style.top = startY + y2 - y1 + 'px';
			element.style.transition = '';
			delX = x2 - oContainer.offsetLeft;
			delY = y2 - oContainer.offsetTop;
			for(let i = 0, length = aLi.length; i < length; i++){
				aLi[i].style.transform = 'scale(1)';
				if( element != aLi[i] &&
					(delX > aLi[i].offsetLeft) && (delX < aLi[i].offsetLeft+220) 
					&& (delY > aLi[i].offsetTop) && (delY < aLi[i].offsetTop+135) 
				){
					aLi[i].style.transform = 'scale(1.1)';
					gobal = aLi[i];
				}
			}
			break;
		case "mouseup":
			if(flag){
				flag = false;
				// 判断如果进入某个元素区域内后 又移除来 则不进行交换
				let delX = event.clientX - oContainer.offsetLeft, delY = event.clientY - oContainer.offsetTop; 
				function isExitTarget(){
					for(let i = 0, length = aLi.length; i < length; i++){
						if( element != aLi[i] &&
							(delX > aLi[i].offsetLeft) && (delX < aLi[i].offsetLeft+220) 
							&& (delY > aLi[i].offsetTop) && (delY < aLi[i].offsetTop+135) 
						){
							isExit = false;
							return isExit;
						}
					}
					return true;
				}
				let a = isExitTarget();
				if(gobal && !a) {
					element.style.left = gobal.offsetLeft + 'px';
					element.style.top = gobal.offsetTop + 'px';
					element.style.transition = 'all .3s';
					gobal.style.left = startX + 'px';
					gobal.style.top = startY + 'px';
					gobal.style.transition = 'all .3s';
					gobal.style.transform = 'scale(1)';
					gobal = null;
				}else{
					element.style.left = startX + 'px';
					element.style.top = startY + 'px';
					element.style.transition = 'all .3s';
					if(gobal){
						gobal.style.transform = 'scale(1)';
						gobal = null;
					}
				}
			}
			element.style.zIndex = 1;
		break;
	}
}