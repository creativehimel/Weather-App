import "./style.css";

/* ------ Variables ------ */
const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchBtn')
const weatherImage = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const locationNotFound = document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weather-box')

async function checkWeather(city){
    const api_key = "#"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherData = await fetch(`${url}`).then(response => response.json())

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)} <sup>°C</sup>`
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/h`
    switch (weatherData.weather[0].main){
        case 'Clouds':
            weatherImage.src = "./cloud.png"
            break
        case 'Clear':
            weatherImage.src = "./clean.png"
            break
        case 'Rain':
            weatherImage.src = "./rain.png"
            break
        case 'Mist':
            weatherImage.src = "./mist.png"
            break
        case 'Snow':
            weatherImage.src = "./snow.png"
            break
    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value)

})



