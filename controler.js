import * as model from "./model.js";
import WeatherDataView from "./weatherDataView.js";
import LocationQueryView from "./locationQueryView.js";

async function controlWeather() {
  try{
    // Get user query from input field
    const query = LocationQueryView.getQuery();
    await model.getAJAX(query);

    // Render data from the model
    WeatherDataView.render(model.state.weatherData);

    // Clear input field
    LocationQueryView.clearInput();
    console.log(model.state.weatherData);
  }catch(err){
    WeatherDataView.renderError(err);
  }
}

init();
function init() {
  // Publisher Subscriber for handling event
  LocationQueryView.addHandlerClick(controlWeather);
  LocationQueryView.addHandlerEnter(controlWeather);
}
