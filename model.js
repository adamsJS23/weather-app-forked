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
    icon: data.weather[0].icon,
    temp: data.main.temp,
    countryName: country,
  };
}

// Await data form OpenWeather API and RestCountries API
export async function getAJAX(query) {
  // await data from OpenWeather
  if (!query) return;
  const weatherData = await AJAX(
    `${openWeatherUrl}weather?q=${query}&units=metric&appid=${API_KEY_OpenWeather}`
  );

  //  Await data from RestCountries
  const countryData = await AJAX(
    `${restCountryUrl}${weatherData.sys.country.toLowerCase()}`
  );

  const country = countryData[0].name.common;
  // Format received data
  formatWeatherData(weatherData, country);

}
