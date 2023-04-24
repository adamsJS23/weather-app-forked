import { API_KEY_OpenWeather, API_KEY_RestCountry } from "./config.js";

export default async function AJAX(url) {
  const response = await fetch(url);
  if (!response.ok) return;
  const data = await response.json();
  return data;
}
