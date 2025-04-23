import React from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { weatherIcons } from "../utils/weatherIcons";

const WeatherCenterCard = ({ data, loading }) => {
  const date = data?.forecastday.map((item) => {
    const dateObj = new Date(item.date);
    const options = { weekday: "long" };
    const dayName = dateObj.toLocaleDateString("tr-TR", options);
    return dayName;
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mt-5 w-4/6 bg-white text-[#276678] py-3 px-1 rounded-xl shadow-md shadow-gray-500 "
    >
      <div>
        {loading ? (
          <Loader />
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase text-center dark:text-gray-400">
              <tr>
                {date.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className=" border-b border-gray-200 py-4 text-lg text-[#276678]"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className=" border-gray-200 text-center">
                {data?.forecastday.map((item, index) => (
                  <td key={index} className="px-6 py-7">
                    <img
                      className="w-24 h-24 mx-auto"
                      src={`/icons/${weatherIcons[item?.day?.condition?.text]}`}
                      alt=""
                    />
                    <p className=" text-[#276678]">
                      {item?.day?.condition?.text}
                    </p>
                  </td>
                ))}
              </tr>
              <tr className=" border-gray-200 text-center dark:border-gray-700">
                {data?.forecastday.map((item, index) => (
                  <td
                    key={index}
                    className="px-4  text-3xl text-amber-800  font-semibold"
                  >
                    <span>{item?.day.maxtemp_c.toFixed()}°C</span>
                  </td>
                ))}
              </tr>
              <tr className=" border-gray-200 text-center dark:border-gray-700">
                {data?.forecastday.map((item, index) => (
                  <td
                    key={index}
                    className="px-4 py-1 text-2xl font-semibold text-sky-800"
                  >
                    <span>{item?.day.mintemp_c.toFixed()}°C</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
};

export default WeatherCenterCard;
