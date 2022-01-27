let weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
let days = ['pn','wt','sr','ct','pt','sb','ws']

let print = document.querySelector('.printDate');
let printh = document.querySelector('.printHours');
let printm = document.querySelector('.printMinutes');
let prints = document.querySelector('.printSeconds');

let funcWeek = function(){
    date = new Date;
    let b = date.getDay();
    let a = days[b-1];
    let day = document.querySelector('.'+a);
    day.classList.add("currentday")
    document.querySelector('.sb').classList.add("weekends")
    document.querySelector('.ws').classList.add("weekends")
}
funcWeek()

let funcDate= function() {
    let hours = date.getHours();
    if (String(hours).length==1){
        hours = '0'+hours
    }
    let minutes = date.getMinutes();
    if(String(minutes).length==1){
        minutes= '0'+minutes
    }
    let seconds = date.getSeconds();
    if(String(seconds).length==1){
        seconds= '0'+seconds
    }
    let month = Number(date.getMonth())+1
    let data = date.getDate()
    if(String(month).length==1){
        month='0'+month
    }
    if(String(data).length==1){
        data='0'+data
    }
    print.innerHTML = date.getFullYear() +'.'+ month +'.' + data +' - '+ hours +':'+minutes+':'+seconds;

}
let funcHours = function() {
    let currHour = date.getHours();
    if (currHour == 1 || currHour == 21){
        printh.innerHTML = date.getHours() + ' час'
    }
    else if (currHour%10 == 2 || currHour%10 == 3 || currHour%10 == 4){
        printh.innerHTML = date.getHours() + ' часа'
    }
    else {
        printh.innerHTML = date.getHours() + ' часов'
    }
}
let funcMinutes = function() {
    let currMinute = date.getMinutes();
    if (currMinute%10 == 1){
        printm.innerHTML = date.getMinutes() + ' минута'
    }
    else if (currMinute%10 == 2 || currMinute%10 == 3 || currMinute%10 == 4){
        printm.innerHTML = date.getMinutes() + ' минуты'
    }
    else {
        printm.innerHTML = date.getMinutes() + ' минут'
    }
}
let funcSeconds = function() {
    let currMinute = date.getSeconds();
    if (currMinute%10 == 1){
        prints.innerHTML = date.getSeconds() + ' секунда'
    }
    else if (currMinute%10 == 2 || currMinute%10 == 3 || currMinute%10 == 4 ){
        prints.innerHTML = date.getSeconds() + ' секунды'
    }
    else {
        prints.innerHTML = date.getSeconds() + ' секунд'
    }
}
let funcMonth = function(){
    let day = date.getDate()
    let month = date.getMonth();
    let year = date.getFullYear();
    let weekday = date.getDay()-1;
    
    month = months[month];
    weekday = weekdays[weekday]

    document.querySelector('.printCurrDate').innerHTML='Сегодня '+weekday+' , '+day + ' ' + month + ' ' + year + ' года';
}


let logger = function(){
    date = new Date;
    funcDate();
    funcMonth();
    funcHours();
    funcMinutes();
    funcSeconds();
}

document.querySelector('.week').style.display='none'
setInterval(logger, 500)
