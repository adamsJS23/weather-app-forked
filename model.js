import { API_KEY_OpenWeather, API_KEY_RestCountry } from "./config.js";
import AJAX from "./helper.js";

export const state = { weatherData: {} };

function formatWeatherData(data) {
  state.weatherData = {
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    country: data.sys.country,
  };
  console.log(state.weatherData);
}

export async function getAJAX() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=ravenna&units=metric&appid=${API_KEY_OpenWeather}`;
  const data = await AJAX(url);
  formatWeatherData(data)
  return data;
}
