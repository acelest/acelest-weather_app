import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "74d30bdc164041d584550102230611";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLoading(true);

      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données météo : ",
            error
          );
          setLoading(false);
        });
      setLocation("");
    }
  };

  const displayTemperature = (temperature) => {
    return `${temperature.toFixed()}°C`;
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
        <button onClick={searchLocation}>Search</button>
      </div>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="top">
              <div className="location">
                <p>{data.location ? data.location.name : ""}</p>
              </div>
              <div className="temp">
                {data.current ? (
                  <h1>{displayTemperature(data.current.temp_c)}</h1> // Utilisez la fonction displayTemperature
                ) : null}
              </div>
              <div className="description">
                {data.current ? <p>{data.current.condition.text}</p> : null}
              </div>
            </div>

            {data.location !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.current ? (
                    <p className="bold">
                      {displayTemperature(data.current.feelslike_c)}
                    </p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.current ? (
                    <p className="bold">{data.current.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.current ? (
                    <p className="bold">
                      {data.current.wind_kph.toFixed()} KPH
                    </p> // Vous pouvez ajuster l'unité de la vitesse du vent
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
