import { API_KEY_OpenWeather, rest } from "./config.js";

export default async function AJAX(url) {
  const response = await fetch(url);
  if (!response.OK) return;
  const data = await response.json();
  console.log(data)
}
