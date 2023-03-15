import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ShowTemp from './ShowTemp';

function App() {

  const [city,setCity]=useState('');
  const [data,setData]=useState({
    description:'',
    temp:0,
    temp_max:0,
    temp_min:0,
    sunrise:0,
    sunset:0,
    country:""
  })

  const getWeatherHandler= async(city)=>{
   const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}
   &appid=db513bc53777f3423033b5fbfe4bde40`)
   .then(res=>{
    // console.log(res.data)
    setData({
      description:res.data.weather[0].description,
      temp_max:res.data.main.temp_max,
      temp_min:res.data.main.temp_min,
      sunrise:res.data.sys.sunrise,
      country:res.data.sys.country
    })
    // console.log(data);
   })
  // temp max ,temp min, country, humidity, sunrise
  }

  return (
   <>
    <div className="App">
      <h1>MyWeather App</h1>
      <input type={'text'} value={city} 
      onInput={e=>setCity(e.target.value)}/>
      <button
       onClick={()=>getWeatherHandler(city)}
        type={'submit'}
        >get Temp</button>
    </div>
    <ShowTemp data={data}/>
   </>
  );
}

export default App;
