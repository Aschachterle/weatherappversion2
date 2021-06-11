import React, { useEffect, useState } from 'react'
import Weather from './Weather'


const Weatherday = () => {

const [zipres, setZip] = useState(null);
const [weatherInfo, setWeatherInfo ] = useState(null)


    useEffect( async () => {
        let zipres = await prompt("what is your zip") 
        setZip(zipres)
        const url1 = `https://www.zipcodeapi.com/rest/js-sI38nn0P74eYHB5CnFJhwnRFHPzvH9fAph6CkzALSmKI2B9qu9omrrXvQVMRwZsx/info.json/${zipres}/degrees`
        const coordResponse = await fetch(url1)
        const coordjsonresponse = await coordResponse.json()
        console.log("json latlng response", coordjsonresponse)
        const token = '4674ad2852ae817aa25435c591292996'
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordjsonresponse.lat}&lon=${coordjsonresponse.lng}&exclude=current,minutely,alerts&units=imperial&appid=${token}`
        const response = await fetch(url)
        const jsonresponse = await response.json()
        console.log(jsonresponse)
        setWeatherInfo(jsonresponse.daily.map(df => {
            return {
                min: df.temp.min,
                max: df.temp.max
            }

        }))
    

    }, [])

    return (
       <div>
           
           {!!weatherInfo && zipres && weatherInfo.map((i, index) => (
               <div key={index}>
                   <Weather
                   min={i.min}
                   max={i.max}
                   ></Weather>

               </div>
           ))}
        </div>
  )
}

export default Weatherday