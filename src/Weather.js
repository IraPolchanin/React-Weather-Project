import React from "react";
import './Weather.css';
export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <input type="search" placeholder="Enter a city.." />
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
            <h1>
                Kharkiv
            </h1>
            <ul>
                <li>Tuesday 12:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" />
                    15˚C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: 72%</li>
                        <li>Wind 15 km/Humidity</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}