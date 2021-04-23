//Query Selectors
const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name h2");
const cardBody = document.querySelector(".card-body");
const timeImage = document.querySelector(".card-top img");
const showAppInfo1 = document.querySelector(".back-card1");
const showAppInfo2= document.querySelector(".back-card2");
const showAppInfo3 = document.querySelector(".back-card3");
const showAppInfo4 = document.querySelector(".back-card4");
const showAppInfo5 = document.querySelector(".back-card5");
const showAppInfo6 = document.querySelector(".back-card6");
const showAppInfo7 = document.querySelector(".back-card6");


const dateDay1 = document.querySelector(".dateDay1");
let iconDay1 = document.querySelector(".iconDay1");
const forecastDay1 = document.querySelector(".forecastDay1");
const maxDay1 = document.querySelector(".maxDay1");
const minDay1 = document.querySelector(".minDay1");
const windDay1 = document.querySelector(".windDay1");
const humidityDay1 = document.querySelector(".humidityDay1");

const dateDay2 = document.querySelector(".dateDay2");
const iconDay2 = document.querySelector(".iconDay2");
const forecastDay2 = document.querySelector(".forecastDay2");
const maxDay2 = document.querySelector(".maxDay2");
const minDay2 = document.querySelector(".minDay2");
const windDay2 = document.querySelector(".windDay2");
const humidityDay2 = document.querySelector(".humidityDay2");

const dateDay3 = document.querySelector(".dateDay3");
const iconDay3 = document.querySelector(".iconDay3");
const forecastDay3 = document.querySelector(".forecastDay3");
const maxDay3 = document.querySelector(".maxDay3");
const minDay3 = document.querySelector(".minDay3");
const windDay3 = document.querySelector(".windDay3");
const humidityDay3 = document.querySelector(".humidityDay3");

const dateDay4 = document.querySelector(".dateDay4");
const iconDay4 = document.querySelector(".iconDay4");
const forecastDay4 = document.querySelector(".forecastDay4");
const maxDay4 = document.querySelector(".maxDay4");
const minDay4 = document.querySelector(".minDay4");
const windDay4 = document.querySelector(".windDay4");
const humidityDay4 = document.querySelector(".humidityDay4");

const dateDay5 = document.querySelector(".dateDay5");
const iconDay5 = document.querySelector(".iconDay5");
const forecastDay5 = document.querySelector(".forecastDay5");
const maxDay5 = document.querySelector(".maxDay5");
const minDay5 = document.querySelector(".minDay5");
const windDay5 = document.querySelector(".windDay5");
const humidityDay5 = document.querySelector(".humidityDay5");

// Global variable
const keyAPI = "e8967392e8821eb3e396e873f6005e29";
//validate if is day or night
const isDayTime = (icon) => {
    if(icon.includes("d")){
        return true;
    } else {
        return false;
    };
}
// Function to fetch coordinates and pass them as arguments to getUVI function and saves them to local storage
fetchCoordinates = (city) =>{
    const lon= city.coord.lon;
    console.log(lon);
    const lat= city.coord.lat;
    console.log(lat);
    const coordinates ={
        lon,
        lat
    };
    localStorage.setItem("coordinates", JSON.stringify(coordinates));


    getUVI(lon,lat);
    const uvIndex = data.current.uvi;
    //Could not get UVIndex
    console.log(uvIndex);

}

// function to display weather in the main card 
displayWeather = (city) =>{
    const imageName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent= city.name;
    
    cardBody.innerHTML = `
                    <div class="card-mid row">
                        <!--Temperature-->
                        <div class="col-8 text-center temp">
                            <span>${city.main.temp}&deg;C</span>
                        </div>
                        <div class="col-4 condition-temp">
                            <!--weather condition-->
                            <p>${city.weather[0].description}</p>
                            <p class="high">${city.main.temp_max}&deg;C</p>
                            <p class="low">${city.main.temp_max}&deg;C</p>
                        </div>
                    </div>
                    <!--weather icon-->
                    <div class="icon-container card shadow mx-auto">
                        <img src=${iconSrc} alt="weather illustration">
                    </div>
                    <div class="card-bottom px-5 py-4 row">
                        <div class="col text-center">
                            <h3>${city.main.feels_like}&deg;C</h3>
                            <span>Feels like</span>
                            <!--Wind Speed-->
                            <p>Wind Speed: ${city.wind.speed} MPH</p>
                        </div>
                        <div class="col text-center">
                            <h3>${city.main.humidity}%</h3>
                            <!--humidity-->
                            <span>Humidity</span>
                            <!--UV index-->
                            <p>UV Index with color</p>
                        </div>
                    </div>
                    `;

    if (isDayTime(imageName)){
        console.log("Day");
        timeImage.setAttribute("src","img/day_image.svg");
        cityName.classList.add("text-black");
        cityName.classList.remove("text-white");
    } else {
        console.log("Night");
        timeImage.setAttribute("src","img/night_image.svg");
        cityName.classList.add("text-white");
        cityName.classList.remove("text-black");
    }

}
//function to display forecast below the main card
displayForecast = (city) =>{
    const imageName1 = city.list[0].weather[0].icon;
    iconDay1.src = `http://openweathermap.org/img/wn/${imageName1}@2x.png`
    dateDay1.innerHTML = city.list[0].dt_txt.substring(0,10);
    forecastDay1.innerHTML = city.list[0].weather[0].description;
    maxDay1.innerHTML =`Max ${city.list[0].main.temp_max}` ;
    minDay1.innerHTML = `Min ${city.list[0].main.temp_min}`;
    windDay1.innerHTML = `Wind Speed: ${city.list[0].wind.speed}MPH`;
    humidityDay1.innerHTML = `Humidity: ${city.list[0].main.humidity}%`;


    const imageName2 = city.list[8].weather[0].icon;
    iconDay2.src = `http://openweathermap.org/img/wn/${imageName2}@2x.png`
    dateDay2.innerHTML = city.list[8].dt_txt.substring(0,10);
    forecastDay2.innerHTML = city.list[8].weather[0].description;
    maxDay2.innerHTML =`Max ${city.list[8].main.temp_max}` ;
    minDay2.innerHTML = `Min ${city.list[8].main.temp_min}`;
    windDay2.innerHTML = `Wind Speed: ${city.list[8].wind.speed}MPH`;
    humidityDay2.innerHTML = `Humidity: ${city.list[8].main.humidity}%`;

    const imageName3 = city.list[16].weather[0].icon;
    iconDay3.src = `http://openweathermap.org/img/wn/${imageName3}@2x.png`
    dateDay3.innerHTML = city.list[16].dt_txt.substring(0,10);
    forecastDay3.innerHTML = city.list[16].weather[0].description;
    maxDay3.innerHTML =`Max ${city.list[16].main.temp_max}` ;
    minDay3.innerHTML = `Min ${city.list[16].main.temp_min}`;
    windDay3.innerHTML = `Wind Speed: ${city.list[16].wind.speed}MPH`;
    humidityDay3.innerHTML = `Humidity: ${city.list[16].main.humidity}%`;

    const imageName4 = city.list[24].weather[0].icon;
    iconDay4.src = `http://openweathermap.org/img/wn/${imageName4}@2x.png`
    dateDay4.innerHTML = city.list[24].dt_txt.substring(0,10);
    forecastDay4.innerHTML = city.list[24].weather[0].description;
    maxDay4.innerHTML =`Max ${city.list[24].main.temp_max}` ;
    minDay4.innerHTML = `Min ${city.list[24].main.temp_min}`;
    windDay4.innerHTML = `Wind Speed: ${city.list[24].wind.speed}MPH`;
    humidityDay4.innerHTML = `Humidity: ${city.list[24].main.humidity}%`;

    const imageName5 = city.list[32].weather[0].icon;
    iconDay5.src = `http://openweathermap.org/img/wn/${imageName5}@2x.png`
    dateDay5.innerHTML = city.list[32].dt_txt.substring(0,10);
    forecastDay5.innerHTML = city.list[32].weather[0].description;
    maxDay5.innerHTML =`Max ${city.list[32].main.temp_max}` ;
    minDay5.innerHTML = `Min ${city.list[32].main.temp_min}`;
    windDay5.innerHTML = `Wind Speed: ${city.list[32].wind.speed}MPH`;
    humidityDay5.innerHTML = `Humidity: ${city.list[32].main.humidity}%`;






    console.log(city);



}


// User input that triggers most of the functions of the application
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const cityInput = cityValue.value.trim();
    console.log(cityInput);
    searchForm.reset();

    getCityWeather(cityInput)
        .then((data) => {
            displayWeather(data);
            fetchCoordinates(data);
            console.log(data);
        })
        .catch (error => {console.log(error) });

    getForecast(cityInput)
        .then((data) => {
            displayForecast(data);
        })
        .catch (error => {console.log(error) });
})

//Fetch function to get most of the information in the main card
let getCityWeather = async(city) => {
    const cityURL = "http://api.openweathermap.org/data/2.5/weather";
    let cityKeyAPI = `?q=${city}&units=metric&appid=${keyAPI}`;

    const response = await fetch(cityURL + cityKeyAPI);

    const data = await response.json();
    return data;
}

getCityWeather();

//Fetch function to get specific data UVIndex, needs coordinates
let getUVI = async(lat, lon) => {
    const oneCallURL = "http://api.openweathermap.org/data/2.5/onecall";
    let cityKeyAPI = `?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&units=metric&appid=${keyAPI}`;

    const response = await fetch(oneCallURL + cityKeyAPI);

    const data = await response.json();
    console.log(data);
    return data;
}

getUVI();

//Fetch function to get Forecast data
let getForecast = async(city) => {
    const forecastURL = "http://api.openweathermap.org/data/2.5/forecast";
    let cityKeyAPI = `?q=${city}&units=metric&appid=${keyAPI}`;

    const response = await fetch(forecastURL + cityKeyAPI);

    const data = await response.json();
    return data;
}

getForecast();
