
# key

    1. 布局时 每个月的第一天 是星期几
        new Date(year,month).getDay()  可以获取每个月的第一天是星期几
        
    2. 需要判断当前年份是否为闰年,来确定二月份的天数
    
    3. 日历的排布,每周7天, 至少要有 6 行，因为会出现 某个月有31 天,1号 是 星期五或者六,而剩下 30天,
    剩下的天数 至少需要5排才能排下去,如下图
![bug]();
    