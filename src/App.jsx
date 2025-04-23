import { useEffect, useState } from "react";
import WeatherMap from "./components/WeatherMap";
import WeatherCard from "./components/WeatherCard";
import WeatherDetail from "./components/WeatherDetail";
import { api } from "./utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("istanbul");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!city) return;
    setIsLoading(true);
    api
      .get(
        `/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alert=yes&lang=tr`
      )
      .then((res) => {
        setIsLoading(false);
        setWeatherData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [city]);

  return (
    <div className=" min-h-screen  text-black pt-20 ">
      <h1 className="text-6xl w-full text-center text-[#276678] font-bold mb-24">
        Hava Durumu Uygulaması
      </h1>
      <div className="flex w-[90vw] mx-auto gap-10 max-md:flex-col-reverse justify-around items-center">
        <WeatherCard
          data={weatherData}
          loading={isLoading}
          open={() => setIsOpen(true)}
        />
        <WeatherMap setCity={setCity} />

        <WeatherDetail
          isLoading={isLoading}
          isOpen={isOpen}
          city={city}
          data={weatherData}
          close={() => setIsOpen(false)}
        />
      </div>
      <footer className="text-center mt-10">
        <p className="text-lg text-[#276678]">
          © 2025 Hava Durumu Uygulaması. Tüm Hakları Saklıdır.
        </p>
      </footer>
    </div>
  );
}

export default App;
