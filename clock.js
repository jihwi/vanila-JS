const clockContainer = document.querySelector(".js-clock");
const clockTime= clockContainer.querySelector("h1"); 
const currentdate= document.querySelector(".js-date")
function getdate(){
    const date= new Date(); 
    const month= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    const day= ["Sun","MON", "Tue","Wed","Thr","Fri","Sat"]; 
    currentdate.innerText = `${date.getFullYear()} . ${month[date.getMonth()]} . ${date.getDate()+1} . ${day[date.getDay()]}`; 
   /* currentdate.innerText = date.getMonth();
    currentdate.innerText = date.getDate();*/
    console.log(date);
    console.log(date.getDay());
}
function getTime() {
    const date= new Date(); 
    const nowHour = date.getHours(); 
    const nowMinutes= date.getMinutes(); 
    const nowSeconds= date.getSeconds(); 
    clockTime.innerText= `${nowHour<10? `0${nowHour}`:nowHour}:${nowMinutes<10 ? `0${nowMinutes}`: nowMinutes}`; 
    setInterval(getTime,1000); 


}
function init(){
 getTime(); 
 getdate();
}
init(); 

