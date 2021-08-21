import { GET_WEATHER } from "../action-types/forecast-action-types";

export const getWeather = async () => {
  const response = await fetch(
    "api.openweathermap.org/data/2.5/weather?q=pensacola&appid=622d85fb1a656b0a3ab04b6a4f7fe706"
  );
  const json = await response.json();
};
