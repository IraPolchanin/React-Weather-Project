import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            coordinates: response.data.coord,
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            city: response.data.name,
        });
    }
    function search() {
        const apiKey = "b2e30f7ef0386c960ef0424843922ae9";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleChangeCity(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input class="form-control" type="search" placeholder="Enter a city.." autoFocus="on" onChange={handleChangeCity} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    }
    else {
        search();
        return "Loading...";
    }
}