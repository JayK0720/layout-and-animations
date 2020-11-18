const oYear = document.getElementById("year");
const oMonth = document.getElementById('month');
const oQuery = document.querySelector('.query');
const oTbody = document.querySelector('.tbody');
function each(arg,callback){
    let start = arg.start,
        end = arg.end;
    for(let i = start; i <= end; i++){
        callback(i)
    }
}
// 设置万年历的起始年份为 1900, 终止年份为 2050
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
each({
    start:1900,
    end:2050
},function(i){
    let oOption = document.createElement('option');
    oOption.textContent = i;
    oOption.value = i;
    if(Number(oOption.value) === currentYear){
        oOption.selected = true;
    }
    oYear.appendChild(oOption);
});

// 设置月份
each({
    start:1,
    end:12
},function(i){
    let oOption = document.createElement('option');
    oOption.textContent = i;
    oOption.value = i - 1;
    if( Number(oOption.value) === currentMonth ){
        oOption.selected = true;
    }
    oMonth.appendChild(oOption);
});

function query(){
    // 求出当前月份的 第一天 是星期几
    oTbody.innerHTML = "";
    const date = new Date(oYear.value,oMonth.value);
    const days = getMonthDays(oYear.value,oMonth.value);
    const firstDay = date.getDay();
    const dateArray = new Array(days).fill(1).map((day,index) => {
        return index+1;
    });
    if( firstDay !== 0 ){
        let arr = new Array(firstDay).fill(0);
        arr.forEach((date) => {
            dateArray.unshift(date);
        })
    }
    if( dateArray.length < 42 ){
        let arr = new Array( 42 - dateArray.length ).fill(0);
        arr.forEach((date) => {
            dateArray.push(date);
        })
    }
    for(let row = 0; row < 6; row++){
        const oTr = document.createElement('tr');
        for(let i = row * 7; i < (row+1)*7 ;i++){
            const oTd = document.createElement('td');
            if(dateArray[i] === 0){
                dateArray[i] = "";
            }
            oTd.textContent = dateArray[i];
            oTr.appendChild(oTd);
        }
        oTbody.appendChild(oTr);
    }
}
query();
oQuery.addEventListener('click',() => {
    query();
},false);

// 求出选择当前年份的月份 有多少天
function getMonthDays(year,month){
    let day = [31,28,31,30,31,30,31,31,30,31,30,31];
    // 如果是闰年，则2月是29天
    if( (year%100!==0 && year%4===0) || (year%100===0&&year%400===0) ){
        day[1] = 29;
    }
    return day[month];
}


const date1 = new Date(2020,3,23);
const date2 = new Date(2020,3,24);
console.log('date1:',date1)
console.log('date2:',date2);
console.log(date2.getTime() - date1.getTime());
console.log(date1.getDay());
console.log(date2.getDay());