import React, { useState } from "react";
import { Input, Button } from "./styled-components/styled-components";

export default function Forecast() {
  const [location, setLocation] = useState();
  console.log(location);

  const [forecast, setForecast] = useState({});
  console.log(forecast);

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    const formattedJSON = await response.json();
    setForecast(formattedJSON);
    return formattedJSON;
  };
  return (
    <div>
      <Input onChange={(e) => setLocation(e.target.value)} />
      <Button onClick={() => getWeather()}>Search</Button>
    </div>
  );
}
