import React from 'react'
import './weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () => {
  return (
    <div className='container'>
    <div className="top-bar">
        <input type="text" className="city" placeholder='Search Cities' />
        <div className="search-icon">
            <img src={search_icon} alt="search icon" />
        </div>
</div>

        <div className="weather-img">
            <img src={cloud} alt="" />
        </div>
        <div className="temp">25</div>
        <div className="city">rabat</div>
        <div className="data">
            <div className="element">
            <img src={humidity} alt="" className="icon" />
            <div className="info">
              <div className="h-percent"></div>
              <div className="text">Humidity</div>
            </div> 
            </div>
            <div className="element">
            <img src={wind} alt="" className="icon" />
            <div className="info">
              <div className="w-speed"></div>
              <div className="text">Wind speed</div>
            </div>
              
            </div>
       
    </div>
    </div>
  )
}

export default Weather