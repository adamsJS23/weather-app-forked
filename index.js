// import useApiKey from './key.js';
import getCountryName from "./ico.js";
// import { getAJAX } from "./model.js";
import * as model from './model.js'
const input = (document.getElementById("locationInput").value = "ravenna");
async function controlWeather() {
  const data = await model.getAJAX();
  // console.log(model)
  console.log(data)
}
 controlWeather()
const display = document.getElementById("weatherContainer");

// document.getElementById("weatherButton").addEventListener("click", getWeather)

function getWeather() {
  // const apiKey = useApiKey()
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;

  try {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod == "400") {
          if (data.message == "Nothing to geocode") {
            display.textContent = "Provide the location!";
          }
        } else if (data.cod == "404") {
          if (data.message == "city not found") {
            display.textContent = "Enter valid city name!";
          }
        }
        const { name, weather, main, sys } = data;
        const { description, icon } = weather[0];
        const { temp } = main;
        const { country } = sys;

        const weatherText = `
         <div>
            <p>
              <span style='font-size: 1.8rem;'>${name}, </span>
              <br>
              <span style='font-size: 1.3rem;'> ${getCountryName(
                country
              )}</span>
            </p>
            <img src='https://openweathermap.org/img/wn/${icon}@2x.png'>
          </div>
          <div class="weather-details">
            <p>${description}</p>
            <p style="font-size: 1.9rem">${Math.floor(temp)}°C</p>
          </div>
        `;
        display.innerHTML = weatherText;
        input.value = "";
      });
  } catch (e) {
    console.log("error", e);
  }
}
