import React, { useState, useEffect } from "react";
import Weatherday from "./Weatherday";

function Form() {
  const [inputvalue, setInputValue] = useState(null);
  const [coords, setcoords] = useState(null);

  const getCoords = async () => {
    const url1 = `https://www.zipcodeapi.com/rest/js-sI38nn0P74eYHB5CnFJhwnRFHPzvH9fAph6CkzALSmKI2B9qu9omrrXvQVMRwZsx/info.json/${inputvalue}/degrees`;
    const coordResponse = await fetch(url1);
    const coordjsonresponse = await coordResponse.json();
    console.log("json latlng response", coordjsonresponse);
    setcoords(coordjsonresponse);
  };

  const typeHandlers = (event) => {
    setInputValue(event.target.value);
    console.log(inputvalue);
  };
  const clickHandler = () => {
    if (inputvalue) {
      getCoords();
    }
  };

  return (
    <>
      <div>
        {
          <form>
            <input onChange={typeHandlers} type="text"></input>
            <button onClick={clickHandler} type="button">
              Submit
            </button>
          </form>
        }
        {coords && !coords.error_code && (
          <div>
            <Weatherday coords={coords} zip={inputvalue}></Weatherday>
          </div>
        )}
        {coords && coords.error_code && <div>invalid zip code</div>}
      </div>
    </>
  );
}

export default Form;
