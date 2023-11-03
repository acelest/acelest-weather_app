// import React, {useState} from "react";
// import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Douala</p>
          </div>
          <div className="temp"></div>
          <h1>30 Celsus</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>60 * F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
