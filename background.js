const body = document.querySelector("body"); 
const numberOfImage =5;

function getRandomNumber(){
    const randomNumber = Math.floor(Math.random()*numberOfImage); 
    const image= new Image(); 
    image.src = `images/${randomNumber+1}.jpg`;
    body.appendChild(image); 
    image.classList.add("backimg"); 

}

function init() {
    getRandomNumber(); 
}

init(); 