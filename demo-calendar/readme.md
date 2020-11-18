![demo](https://github.com/JayK0720/layout-and-animations/blob/master/demo-calendar/imgs/Mar-23-2020%2022-50-33.gif);
# key

    1. 布局时 每个月的第一天 是星期几
        new Date(year,month).getDay()  可以获取每个月的第一天是星期几,从而确定排布在哪个位置
        
    2. 需要判断当前年份是否为闰年,来确定二月份的天数
    
    3. 日历的排布,每周7天, 至少要有 6 行，因为会出现 某个月有31 天,1号 是 星期五或者六,而剩下 30天,
    剩下的天数 至少需要5排才能排下去,如下图
![bug](https://github.com/JayK0720/layout-and-animations/blob/master/demo-calendar/imgs/demo.png);
    
    4. 设置当前日期 0点的时间戳
     new Date(year,month,day);
     
    todos:
        1. 今天的日期高亮
        2. 增加按钮切换月份 或者 年份     
        3. 补全上个月的最后几天 或者 下个月的前几天
```js
const date1 = new Date(2020,3,23);
const date2 = new Date(2020,3,24);
console.log('date1:',date1)     // Thu Apr 23 2020 00:00:00 GMT+0800 (中国标准时间)
console.log('date2:',date2);    // Fri Apr 24 2020 00:00:00 GMT+0800 (中国标准时间)
console.log(date2.getTime() - date1.getTime()); // 86400000
```