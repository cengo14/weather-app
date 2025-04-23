import React from "react";
import { motion } from "framer-motion";
import { moon_phase, moon_phaseTr } from "../utils/moon_phase";
import Loader from "./Loader";

const WeatherDetailRightCard = ({ data, loading }) => {
  console.log(data);
  const convertTo24Hour = (time) => {
    return new Date(`1970-01-01 ${time}`).toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mt-5 h-[532px] bg-white text-[#276678] py-2 px-2 rounded-xl shadow-md shadow-gray-500"
    >
      {loading ? (
        <Loader />
      ) : (
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-amber-100 rounded-xl mt-2"
          >
            <div className="flex justify-around items-center">
              <img src="/icons/sunrise.svg" alt="" className="size-24" />
              <img src="/icons/sunset.svg" alt="" className="size-24" />
            </div>
            <div className="flex justify-around items-center text-xl">
              <p>
                {convertTo24Hour(data.forecast.forecastday[0].astro.sunrise)}
              </p>
              <p>
                {convertTo24Hour(data.forecast.forecastday[0].astro.sunset)}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-sky-100 rounded-xl mt-2"
          >
            <div className="flex justify-around items-center">
              <img
                src="/icons/moonrise.svg"
                alt={data.forecast.forecastday[0].astro.moonrise}
                className="size-24"
              />
              <img
                src="/icons/moonset.svg"
                alt={data.forecast.forecastday[0].astro.moonset}
                className="size-24"
              />
            </div>
            <div className="flex justify-around items-center text-xl">
              <p>
                {convertTo24Hour(data.forecast.forecastday[0].astro.moonrise)}
              </p>
              <p>
                {convertTo24Hour(data.forecast.forecastday[0].astro.moonset)}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-sky-100 rounded-xl mt-2 flex justify-around items-center"
          >
            <img
              src={` /icons/${
                moon_phase[data.forecast.forecastday[0].astro.moon_phase]
              }`}
              alt=""
              className="size-28"
            />
            <p className="text-2xl">
              {moon_phaseTr[data.forecast.forecastday[0].astro.moon_phase]}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex justify-around items-center bg-cyan-100 rounded-xl mt-2"
          >
            <img src="/icons/umbrella.svg" alt="" className="size-30" />
            <p className="text-2xl flex-wrap">
              {data.forecast.forecastday[0].day.daily_will_it_rain === 1
                ? "Yağmur Bekleniyor"
                : "Yağmur Beklenmiyor"}
            </p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default WeatherDetailRightCard;
