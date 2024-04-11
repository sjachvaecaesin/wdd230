const tempHigh = document.querySelector("#high");
const currentTemp = document.querySelector("#temp-value");
const humidity = document.querySelector("#humid-value");
const weatherIcon = document.querySelector("#weather-icon");
const castElement = document.querySelector("#forecast");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&units=imperial&appid=7e9cd116eaeea412c1716645e87192aa";
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&units=imperial&appid=7e9cd116eaeea412c1716645e87192aa";

async function apiFetch() {
    try {
        const response = await fetch(url);
        const cast = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
        if (cast.ok) {
            const fore = await cast.json();
            displayCast(fore);
        }
        else {
            throw Error(await cast.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCast(data) {
    castElement.innerHTML = `Tomorrow's 15:00 (3PM) Temperature Forecast: ${data.list[5].main.temp} &deg;F`
}

function displayResults(data) {
    tempHigh.innerHTML = `${data.main.temp_max} &deg;F`
    currentTemp.innerHTML = `${data.main.temp} &deg;F`
    humidity.innerHTML = `${data.main.humidity}%`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let title = data.weather[0].main;
    let ID = data.weather[0].id;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Weather Img");
    captionDesc.innerHTML = `Title: ${title.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}<br>ID: ${ID}<br>Description: ${desc.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}`;
}