import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dc85d6952867a5783f19399f13c6e547`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    } 
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"
        />
      </div>
      <div className="container">

        <div className="top">
          <div className="location"> 
           <p>Dallas</p>
          </div>
          <div className="tempature">
            <h1> 91F </h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels-like">
            <p className="bold">81</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">21MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
