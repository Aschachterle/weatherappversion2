import React, { useEffect, useState } from "react";
import Weather from "./Weather";

const Weatherday = (props) => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(async () => {
    // Weather API
    console.log(props);
    const token = "4674ad2852ae817aa25435c591292996";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lng}&exclude=current,minutely,alerts&units=imperial&appid=${token}`;
    const response = await fetch(url);
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    setWeatherInfo(
      jsonresponse.daily.map((df) => {
        return {
          min: df.temp.min,
          max: df.temp.max,
        };
      })
    );
  }, [props.coords]);

  return (
    <div>
      {!!weatherInfo &&
        weatherInfo.map((i, index) => (
          <div key={index}>
            <Weather min={i.min} max={i.max}></Weather>
          </div>
        ))}
    </div>
  );
};

export default Weatherday;
