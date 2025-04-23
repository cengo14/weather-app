import React from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { windDirections } from "../utils/windDir";
import AirQualityBar from "./AirQualityBar";

const WeatherDetailLeftCard = ({ data, loading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mt-5 w-2/6 h-92 bg-white text-[#276678] py-2 px-2 rounded-xl shadow-md shadow-gray-500"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-3 items-center">
            <motion.img
              src="icons/smoke-particles.svg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=" size-14"
            />

            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:text-2xl capitalize text-sm font-semibold col-span-2"
            >
              <AirQualityBar
                airQualityIndex={data?.current.air_quality["us-epa-index"]}
              />
            </motion.span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <motion.img
              src="icons/thermometer.svg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="size-14"
            />
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:text-2xl capitalize text-sm font-semibold col-span-2"
            >
              {data?.current.feelslike_c} °C
            </motion.span>
          </div>
          <div className=" grid grid-cols-3 items-center">
            <motion.img
              src="icons/humidity.svg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className=" size-14"
            />
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="md:text-2xl capitalize text-sm font-semibold col-span-2"
            >
              {data?.current.humidity}%
            </motion.span>
          </div>
          <div className="  grid grid-cols-3 items-center">
            <motion.img
              src="icons/windsock.svg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className=" size-14"
            />
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="md:text-2xl capitalize text-sm font-semibold col-span-2"
            >
              {data?.current.wind_kph} km/s
            </motion.span>
          </div>
          <div className="  grid grid-cols-3 items-center">
            <motion.img
              src="icons/compass.svg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className=" size-14"
            />
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="md:text-2xl capitalize text-sm font-semibold col-span-2"
            >
              {windDirections[data?.current.wind_dir] || "Bilinmiyor"}
            </motion.span>
          </div>
          <div className=" grid grid-cols-3 items-center">
            <motion.img
              src="icons/barometer.svg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className=" size-14"
            />
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="md:text-2xl capitalize text-sm font-semibold col-span-2"
            >
              {data?.current.pressure_mb} hPa
            </motion.span>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default WeatherDetailLeftCard;
