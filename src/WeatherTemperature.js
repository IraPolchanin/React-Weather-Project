import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrengeit');
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrengeit() {
        return (props.celsius) * 1.8 + 32;
    }

    if (unit === 'celsius') {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">
                    ˚C |{" "}
                    <a href="/" onClick={showFahrenheit}>˚F</a></span>
            </div>
        );
    }
    else {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrengeit())}</span>
                <span className="unit">
                    <a href="/" onClick={showCelsius}>˚C </a>|{" "}
                    ˚F </span>
            </div>
        );
    }

}