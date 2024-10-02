import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    let apiKey = '8912139b05204e0b46c2c6ec1c098704';

    
        let getWeather = async() => {
                
            try{
                    let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
                    let jsonRes = await response.json();
                    
                    let weather = {
                        name      : city,
                        temp      : Math.round(jsonRes.main.temp),
                        maxTemp   : Math.round(jsonRes.main.temp_max),
                        minTemp   : Math.round(jsonRes.main.temp_min),
                        humidity  : Math.round(jsonRes.main.humidity),
                        feelsLike : Math.round(jsonRes.main.feels_like),
                        windSpeed : Math.round(jsonRes.wind.speed),
                        weather   : jsonRes.weather[0].main
                    }
            
                console.log(weather);
                setError(false);
                return updateInfo(weather);

                    
            }catch(error){
                setError(true)
            }

            
        }

    let handligTextField = (event) => {
        setCity(event.target.value);
    }



    let handlingSubmit = (event) => {
       try{
        event.preventDefault();
        getWeather();
        console.log(city);
        setCity("");

       }catch(err){
        setError(true)
       }
    }

    return (
        <>
           <div className="SearchBox">
                <form action="" onSubmit={handlingSubmit}>
                        <TextField id="city" label="City name" variant="outlined" value={city} onChange={handligTextField}/>
                        <br /> <br />
                        <Button type='submit' variant='contained'>Search</Button>
                        <br/>

                        {error && <p style={{color:"red"}}><b>! such place is not available <br /> or, weak internet connection.</b> </p>}
                        <br />
                </form>

              
            </div>
        </>
    )
}