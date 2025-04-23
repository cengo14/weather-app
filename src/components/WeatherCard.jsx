import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weatherIcons } from "../utils/weatherIcons";
import Loader from "./Loader";
import { weatherBackgrounds } from "../utils/cardColor";

const WeatherCard = ({ data, loading, open }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`w-2/6 max-md:w-4/6 max-md:mt-10 h-[100%]  p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-gray-50 ${
        weatherBackgrounds[data?.current?.condition?.text]
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <div>
          {/* Şehir Adı */}
          <motion.h2
            key={data?.location.name} // Şehir değiştikçe animasyon uygula
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" lg:text-5xl md:text-3xl text-4xl font-semibold"
          >
            {data.location.name.split(" ")[0]}
          </motion.h2>

          <div className="flex items-center justify-between">
            {/* Sıcaklık */}
            <motion.div
              key={data.current.temp_c} // Sıcaklık değiştikçe animasyon uygula
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex font-semibold"
            >
              <span className="text-[100px]">
                {data.current.temp_c.toFixed()}
              </span>
              <span className="mt-10 text-2xl"> °C</span>
            </motion.div>

            {/* Hava Durumu İkonu */}
            <AnimatePresence mode="wait">
              <motion.img
                key={data?.current?.condition?.text} // Hava durumu değiştikçe animasyon uygula
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-40 md:w-52"
                src={`/icons/${weatherIcons[data.current.condition?.text]}`}
                alt={data?.current?.condition?.text}
              />
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Detayları Gör Butonu */}
      <motion.button
        onClick={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full text-center cursor-pointer mt-10 px-5 py-2 bg-white text-black rounded-2xl"
      >
        Detayları Gör
      </motion.button>
    </motion.div>
  );
};

export default WeatherCard;
