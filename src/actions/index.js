import axios from 'axios';

const API_KEY = '0e93ae2329125c859e06159860f200f3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; //,us is limiting the search to US cities
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
