import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const response = await axios.get(
              `http://127.0.0.1:7056/weather?lat=${lat}&lon=${lon}`
            );
            setWeather(response.data);
            setLoading(false);
          } catch (err) {
            console.error(err);
            setError("Failed to fetch weather data");
            setLoading(false);
          }
        },
        (err) => {
          console.error(err);
          setError("Permission denied or unable to fetch location");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

    
  return (
    <div className="bg-[url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg')] h-screen w-full bg-cover bg-center flex flex-col items-center justify-start">
      <Header />
      
      <div className="mt-15 w-full max-w-md p-6 backdrop-blur-sm rounded-3xl shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-4 text-center">Current Weather</h1>

        {loading && <p className="text-center">Fetching weather data...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {weather && (
          <div className="space-y-6">
            {/* Location */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold">{weather.name}, {weather.sys?.country}</h2>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="mx-auto"
              />
              <p className="capitalize text-xl">{weather.weather[0].description}</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold mb-1">Temperature</label>

                <input
                  type="text"
                  value={`${weather.main.temp} k`}
                  readOnly
                  className={`border p-2 rounded w-full text-center ${
                    weather.main.temp > 30
                      ? "text-red-500"
                      : weather.main.temp < 15
                      ? "text-blue-400"
                      : "text-yellow-300"
                  } `}
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Humidity</label>
                <input
                  type="text"
                  value={`${weather.main.humidity} %`}
                  readOnly
                  className="border p-2 rounded w-full text-center "
                />
              </div>
               <div>
                <label className="block font-bold mb-1">State</label>
                <input
                  type="text"
                  value={`${weather.weather[0].main} `}
                  readOnly
                  className="border p-2 rounded w-full text-center "
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Wind Speed</label>
                <input
                  type="text"
                  value={`${weather.wind.speed} m/s`}
                  readOnly
                  className="border p-2 rounded w-full text-center "
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Pressure</label>
                <input
                  type="text"
                  value={`${weather.main.pressure} hPa`}
                  readOnly
                  className="border p-2 rounded w-full text-center "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
