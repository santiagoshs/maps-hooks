import { useState } from "react";

const WeatherForm = () => {
    const [country, setCountry] = useState("");
  return (
    <>
      <form>
        <label>Weather from country</label>
        <input type="text" />
        <input type="submit" />
      </form>
    </>
  );
};

export default WeatherForm;
