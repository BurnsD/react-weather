import React, {useState} from "react";
import axios from "axios";

function App() {

  // const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=dc85d6952867a5783f19399f13c6e547'


  return (
    <div className="app">
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
            <p>81</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>21MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
