import { useState } from "react";
import WeatherForm from "./WeatherForm";

const WeatherApp = () => {
  const [Weather, setWeather] = useState(null);

  return (
    <>
      <form>
        <WeatherForm/>
      </form>
    </>
  );
};
export default WeatherApp;
