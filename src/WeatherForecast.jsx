import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = ({weather}) => {
  console.log('rendering WeatherForecast')
    return (
        <div className="weather">
            weather
            <WeatherData
                day={weather.day}
                conditions={weather.conditions}
                time={weather.time}
            />
            <WeatherIcon
                img={weather.img} imgAlt={weather.imgAlt}/>
        </div>
    )
}
export default WeatherForecast;