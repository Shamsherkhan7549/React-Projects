import WeatherInfo from "./WeatherInfo";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function(){
   
    let [weatherInfo, setWeatherInfo] = useState({
        name:'wonderland',
        image: '../public/clear.png',
        temp: 38,
        maxTemp:38,
        minTemp:  38,
        humidity: 29,
        feelsLike: 40,
        windSpeed: 2,
        weather: 'clear',
    });

    let updateInfo = (weather) => {
        setWeatherInfo(weather);
    }

    return(
        <div>
    
            <h3>Weather</h3>
            <SearchBox updateInfo = {updateInfo}/> <br />
            <WeatherInfo weatherInfo = {weatherInfo}/>
          
        </div>
    )
}