import { API_KEY_OpenWeather, API_KEY_RestCountry } from "./config.js";

export default async function AJAX(url) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error("Invalid city name, please enter a valid city name");

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}
