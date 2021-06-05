
const form= document.querySelector(".js-form"); 
const input = form.querySelector("input"); 
const greetingtitle= document.querySelector(".js-greetingTitle"); 
const currentUsername = localStorage.getItem("user"); 

function handlesubmit(event){
    event.preventDefault(); 
    const currentValue = input.value;
    localStorage.setItem("user", currentValue); 
    paintGreeting(currentValue); 
}
function askName(){
    form.classList.add("showing"); 
    form.addEventListener("submit",handlesubmit); 

}
function paintGreeting(text){
    form.classList.remove("showing"); 
    greetingtitle.classList.add("showing"); 
    greetingtitle.innerText= `Hello, ${text}!`; 
   
}
function greetingUser(){   
    if (currentUsername==null){
        askName(); 
    }
    else {
        paintGreeting(currentUsername); 
    }


}

function init() {

greetingUser(); 

}
init(); 