//Query Selectors
const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name h2");


const keyAPI = "e8967392e8821eb3e396e873f6005e29";

displayWeather = (city) =>{
    cityName.textContent= city.name;

}

displayForecast = (city) =>{
    console.log(city);

}



searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const cityInput = cityValue.value.trim();
    console.log(cityInput);
    searchForm.reset();

    getCityWeather(cityInput)
        .then((data) => {
            displayWeather(data);
        })
        .catch (error => {console.log(error) });

    getForecast(cityInput)
        .then((data) => {
            displayForecast(data);
        })
        .catch (error => {console.log(error) });
})


let getCityWeather = async(city) => {
    const cityURL = "http://api.openweathermap.org/data/2.5/weather";
    let cityKeyAPI = `?q=${city}&units=metric&appid=${keyAPI}`;

    const response = await fetch(cityURL + cityKeyAPI);

    const data = await response.json();
    return data;
}

getCityWeather();

let getUVI = async(lat, lon) => {
    const oneCallURL = "http://api.openweathermap.org/data/2.5/onecall";
    let cityKeyAPI = `?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&units=metric&appid=${keyAPI}`;

    const response = await fetch(oneCallURL + cityKeyAPI);

    const data = await response.json();
    console.log(data);
    return data;
}

getUVI();

let getForecast = async(city) => {
    const forecastURL = "http://api.openweathermap.org/data/2.5/forecast";
    let cityKeyAPI = `?q=${city}&units=metric&appid=${keyAPI}`;

    const response = await fetch(forecastURL + cityKeyAPI);

    const data = await response.json();
    return data;
}

getForecast();



// const cityURL = "http://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=metric&appid=e8967392e8821eb3e396e873f6005e29";
// const oneCallURL = "http://api.openweathermap.org/data/2.5/onecall?lat=33.4484&lon=-112.074&exclude=minutely,hourly,daily&units=metric&appid=e8967392e8821eb3e396e873f6005e29";
// const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=Phoenix&units=metric&appid=e8967392e8821eb3e396e873f6005e29";
// function getCityWeather (){
//     fetch(cityURL)
//         .then(function(response){
//             return response.json();
//         })
//         .then (function (data){
//             console.log(data);
//         })
//         .catch(function(error){
//             console.log(error);
//         })
// }
// getCityWeather();

// function getUVI (){
//     fetch(oneCallURL)
//         .then(function(response){
//             return response.json();
//         })
//         .then (function (data){
//             console.log(data);
//         })
//         .catch(function(error){
//             console.log(error);
//         })
// }
// getUVI();

// function getForecast (){
//     fetch(forecastURL)
//         .then(function(response){
//             return response.json();
//         })
//         .then (function (data){
//             console.log(data);
//         })
//         .catch(function(error){
//             console.log(error);
//         })
// }
// getForecast();





// const weather = { 
//     temperature : {
//         value : 18,
//         unit : "celsius"
//     },
//     description : "few clouds",
//     iconId : "01d",
//     city : "London",
//     country : "GB"
// };

// function displayWeather(){
//     iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
//     tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
//     descElement.innerHTML = weather.description;
//     locationElement.innerHTML = `${weather.city}, ${weather.country}`;
// }

// function celsiusToFahrenheit (temperature){
//     (temperature * 9/5) + 32;
// }

// temperature.addEventListener("click", function(){

//     if(weather.temperature.value === undefined) return;

//     if(weather.temperature.unit === "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
//         tempElement.innerHTML =`${fahrenheit}° <span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     } else { 
//         tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
//         weather.temperature.unit = "celsius";
//     }
// });





