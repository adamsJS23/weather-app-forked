import {
  API_KEY_OpenWeather,
  API_KEY_RestCountry,
  openWeatherUrl,
  restCountryUrl,
} from "./config.js";
import AJAX from "./helper.js";

// State variable
export const state = { weatherData: {} };

// Formating Data recieved from OpenWeather
function formatWeatherData(data, country) {
  state.weatherData = {
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    countryName: country,
  };
  console.log(state.weatherData);
}

// Await data form OpenWeather API and RestCountries API
export async function getAJAX() {
  const weatherData = await AJAX(
    `${openWeatherUrl}weather?q=ravenna&units=metric&appid=${API_KEY_OpenWeather}`
  );

  const countryData = await AJAX(
    `${restCountryUrl}${weatherData.sys.country.toLowerCase()}`
  );
  const country = countryData[0].name.common;

  formatWeatherData(weatherData, country);

  return weatherData;
}
