import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForcast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForcast} />
                                </div>);
                        }
                        else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    }
    else {
        const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
        let latitude = props.coordinates.lat;
        let Longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${Longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }

}