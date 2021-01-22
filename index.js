const target_future_time =window.prompt("Please Enter Future date in given formate ","month/date/year")
// const target_future_time='1/24/2021';
const selected = document.createElement('div');
let interval;
const formate=(parm)=>{
    if(isNaN(parm))
    {
        selected.innerHTML= `Please write date in given formate in Prompt Box or future date  ` ;
        selected.style.color="red"
        return "0";
    }
   return (parm<10) ? `0${parm}`:`${parm}`;
}
selected.setAttribute('class','select');
selected.innerHTML= `Your selected date is : 
<br> &nbsp &nbsp &nbsp ${new Date(target_future_time).toLocaleDateString()} ` ;
document.querySelector('.container').insertAdjacentElement('afterbegin',selected)
console.log(target_future_time);

const calltime=()=>{
const timeprev= new Date(target_future_time);
const timenow= new Date();
const remaining= (timeprev-timenow);
if(remaining<0)
{
    formate("djfkj");
    return;
}

const days= remaining/1000/3600/24;
// console.log(days);
const hour= (days- Math.floor(days))*24;
// console.log(hour);
const min= (hour-Math.floor(hour))*60;
// console.log(min);
const sec = (min- Math.floor(min))*60;
// console.log(sec);
document.querySelector('.time1').innerHTML=formate(Math.ceil(days));
document.querySelector('.time2').innerHTML=formate(Math.ceil(hour));
document.querySelector('.time3').innerHTML=formate(Math.ceil(min));
document.querySelector('.time4').innerHTML=formate(Math.ceil(sec));

}

interval= setInterval(() => calltime(), 1000);