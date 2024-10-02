import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function WeatherInfo({weatherInfo}){
        let clear = '../public/clear.png';
        let clouds = '../public/clouds.png';
        let drizzle = '../public/clear.png';
        let rain = '../public/rain.png';
        let snow = '../public/snow.png'
        
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="270"
                        image= {(weatherInfo.temp>=0 && weatherInfo.temp<=10) ? snow : (weatherInfo.temp>=10 && weatherInfo.temp<=15) ? drizzle : (weatherInfo.temp>=15 && weatherInfo.temp<=20) ? clouds : (weatherInfo.temp>=20 && weatherInfo.temp<=25)? rain : clear}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.name.toUpperCase()}
                        </Typography>

                        <Typography id='WeatherInfo' variant="body2" sx={{ color: 'text.secondary' }} component={'span'} >
                           <p>Tempreture: {weatherInfo.temp}&deg;C</p>
                          
                          <div id='weather-extra-info'>
                                <div id='max-min'>
                                        <p>Max Temp. : {weatherInfo.maxTemp}&deg;C</p>
                                        <p>Min Temp. : {weatherInfo.minTemp}&deg;C</p>
                                </div>
                                
                                <div id='hum-sp'>
                                        <p>Humidity  : {weatherInfo.humidity}&deg;</p>
                                        <p>Wind speed: {weatherInfo.windSpeed} km/h</p>
                                </div>
                          </div>

                           <p>The weather can be  described as <b><i> {weatherInfo.weather} </i></b> feels like {weatherInfo.feelsLike}&deg;C . </p>
                        </Typography> 
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}