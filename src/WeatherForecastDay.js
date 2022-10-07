import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.temp.max)
        return `${maxTemperature}˚`;
    }
    function minTemperature() {
        let minTemperature = Math.round(props.data.temp.min)
        return `${minTemperature}˚`;
    }
    function dayWeek() {
        let date = new Date(props.data.dt * 1000);
        let dayWeek = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[dayWeek];
    }
    return (
        <div>
            <div className="WeatherForecastDay">{dayWeek()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecastTemperature">
                <span className="WeatherForecastTemperatureMax">
                    {maxTemperature()}
                </span>
                <span className="WeatherForecastTemperatureMin">
                    {minTemperature()}
                </span>
            </div>
        </div>);
}