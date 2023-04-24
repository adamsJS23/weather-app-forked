import * as model from './model.js'
import WeatherDataView from './weatherDataView.js'

const input = (document.getElementById("locationInput").value = "ravenna");
async function controlWeather() {
  await model.getAJAX();
  // console.log(model)
  console.log(model.state.weatherData)
}
 controlWeather()
const display = document.getElementById("weatherContainer");

// document.getElementById("weatherButton").addEventListener("click", getWeather)

