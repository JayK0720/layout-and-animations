# 思路
	
		每个元素先float排列,再转换为绝对定位,获取每个元素在浮动时的位置,再将每个元素offsetLeft,offsetTop的值赋值为绝对定位的left和top
		
		tips:
		1. 在浮动获取元素相对父元素的offsetLeft和offsetTop值时包含了margin,转换为绝对定位时设置为元素的left和top值和
		css设置的margin值重叠了,所以设置position:absolute时需要清除margin.
		
		2. 给每个元素绑定事件耗费性能，利用事件委托给父元素绑定事件
		3. 元素交互时的碰撞逻辑(当鼠标进入到某个元素到时候即为希望与当前元素碰撞)

