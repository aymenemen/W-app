import React, { useEffect, useState } from 'react'
import './weather.css'
import search_icon from '../assets/search.png'
import Clear from '../assets/clear.png'
import Clouds from '../assets/cloud.png'
import Drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import Rain from '../assets/rain.png'
import Snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import axios from 'axios'
const Weather = () => {
  useEffect(() => {
    const fetchData = async () => {
      
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c57e3eb260be27dcb3bd24467103fae`);
        
        setCast(response.data);
        
  
    };

    fetchData(); 
  },[]);
const [cast,setCast]=useState({})
const [city,setCity]=useState('malaga')
const [src,setSrc]=useState(Clear)
const getCity=(e)=>{
  setCity(e.target.value)
}
const Submit = async (e)=>{
  e.preventDefault();
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c57e3eb260be27dcb3bd24467103fae`);
  setCast(response.data);
  console.log(response.data)
  img()
  console.log(city)
}

function img(){
  const weatherMain = cast?.weather[0]?.main;
  console.log(weatherMain)
  switch (weatherMain) {
    case "Clouds":
      setSrc(Clouds);
      break;
    case "Rain":
      setSrc( Rain);
      break;
    case "Clear":
      setSrc(Clear);
      break;
    case "Drizzle":
      setSrc(Drizzle);
      break;
    case "Snow":
      setSrc(Snow);
      break;
    default:
      console.log("Weather condition not recognized. "+weatherMain);
  }
} 
  return (
    <div className='container'>
    <div>
        <form className="top-bar" onSubmit={(e)=>Submit(e)}>
        <input type="text" className="city" placeholder='Search Cities' onChange={getCity} />
        <div className="search-icon">
           <button className='bW' type='submit'><img src={search_icon} alt="search icon" /></button> 
        </div></form>
</div>

        <div className="weather-img">
            <img src={src} alt='weather' />
        </div>
        <div className="temp">{Math.floor((cast.main?.temp)-273.15)}°</div>
        <div className="city">{cast.name}</div>
        <div className="data">
            <div className="element">
            <img src={humidity} alt="" className="icon" />
            <div className="info">
              <div className="h-percent">{cast.main?.humidity}%</div>
              <div className="text">Humidity</div>
            </div> 
            </div>
            <div className="element">
            <img src={wind} alt="" className="icon" />
            <div className="info">
              <div className="w-speed">{cast.wind?.speed}</div>
              <div className="text">Wind speed</div>
            </div>
              
            </div>
       
    </div>
    </div>
  )
}

export default Weather