import React, { useState, useEffect } from 'react'



const Weather = (props) => {
    // let time = moment.unix(props.weatherdata.daily[props.index].dt).format('dddd').slice(0,3)
    // let minTemp = props.weatherdata.daily[props.index].temp.min
    // let sky = props.weatherdata.daily[props.index].weather[0].main

    // let icon = props.weatherdata.daily[props.index].weather[0].icon


    return (
        <>
        <div className="weather__info">
            {/* <div>{time}</div> */}
            {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> */}
            <div>High {props.max}</div>
            <div>Low {props.min}</div>

        </div>


        </>
      );

  }
  
  export default Weather;