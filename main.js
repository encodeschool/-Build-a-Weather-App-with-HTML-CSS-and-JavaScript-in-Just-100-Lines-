let searchBtn = document.querySelector('button#search');
let weatherCard = document.querySelector('.weather_card');
let searchCard = document.querySelector('.search_card');
let userInput = document.querySelector('#user_input');

const API_KEY = "c4a5f0312087d7f059b42efc5977fde1";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

searchBtn.addEventListener('click', () => {
    weatherCard.classList.remove('hide');
    searchCard.classList.add('hide');

    fetch(BASE_URL + "?appid=" + API_KEY + "&q=" + userInput.value)
    .then(response => response.json())
    .then(data => {
        weatherCard.innerHTML = `
            <img src="img/${checkWeatherCondition(data["weather"][0]["description"])}.gif" class="image_wrapper" />
            <h1>${data["name"]}</h1>
            <h2>${Math.floor(data["main"]["temp"] - 273.15)}<sup>⭕</sup></h2>
            <p>${data["weather"][0]["description"]}</p>
        `
    });

    function checkWeatherCondition(condition) {
        switch(condition) {
            case "overcast clouds":
                return "cloud";
            break;
            case "rain":
                return "rain";
            break;
            case "clear sky":
                return "clear_sky";
            break;
            default:
                return "sun";
            break;
        }
    }

});