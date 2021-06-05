const API_KEY= "7f1180c1ea26204ffb84601fd1eda0e6"; 
const COORDS_LS= "coords"
const weather = document.querySelector(".js-weather"); 


function getweather(lat, lon){
    fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(
        function(response){
            return response.json();}
            ).then(function(json){
            const temp = json.main.temp; 
            const location =json.name; 
            weather.innerText= `${temp}℃ @ ${location}`; 
        })
    
};

function savecoords(coordsObj){

    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj)); 
   

}
function getcoordssucess(position){
    const latitude= position.coords.latitude; 
    const longitude= position.coords.longitude; 
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    }; 
    savecoords(coordsObj); 
    getweather(latitude,longitude); 
}
function getcoordserror(){
    console.log("cant get coords");
}
function getcoords(){
    navigator.geolocation.getCurrentPosition(getcoordssucess, getcoordserror); 
}
function loadLocation(){
const coords = localStorage.getItem(COORDS_LS); 
if (coords==null){
    getcoords(); 
}
else {
const parsedcoords= JSON.parse(coords); 
getweather(parsedcoords.latitude, parsedcoords.longitude); 


}
}

function init(){
    
    loadLocation(); 

}
init(); 
