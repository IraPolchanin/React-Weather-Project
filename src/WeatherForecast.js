import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let latitude = props.coordinates.lat;
    let Longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${Longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecastDay">Thu</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecastTemperature">
                        <span className="WeatherForecastTemperatureMax">
                            19˚
                        </span>
                        <span className="WeatherForecastTemperatureMin">
                            10˚
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}