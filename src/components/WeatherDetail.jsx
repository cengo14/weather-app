import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import { weatherIcons } from "../utils/weatherIcons";
import WeatherDetailLeftCard from "./WeatherDetailLeftCard";
import WeatherCenterCard from "./WeatherCenterCard";
import { weatherBackgrounds } from "../utils/cardColor";
import Loader from "./Loader";
import WeatherDetailRightCard from "./WeatherDetailRightCard";
const WeatherDetail = ({ city, data, close, isOpen, isLoading }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col h-full">
        <div className="flex h-full gap-x-2">
          <div className="w-4/6">
            <div
              className={`flex items-center w-full h-36 justify-between shadow-md shadow-gray-500  ${
                weatherBackgrounds[data?.current?.condition?.text]
              } rounded-xl mt-5 px-10 text-gray-50`}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <div className="flex items-center">
                    {/* Hava Durumu İkonu */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={data?.current?.condition?.text} // Hava durumu değiştikçe animasyon uygula
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-40"
                        src={`/icons/${
                          weatherIcons[data?.current?.condition?.text]
                        }`}
                        alt={data?.current?.condition?.text}
                      />
                    </AnimatePresence>
                    <div className="space-y-2">
                      <p className=" text-4xl font-semibold capitalize">
                        {data?.current?.condition?.text}
                      </p>
                      {/* Şehir Adı */}
                      <motion.h2
                        key={data.location.name} // Şehir değiştikçe animasyon uygula
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="capitalize text-xl font-bold text-gray-100"
                      >
                        {data.location.name}
                      </motion.h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-end mr-10">
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
                  </div>
                </>
              )}
            </div>

            {/* Gökyüzü Açıklaması */}

            <div className="flex gap-2 flex-1">
              <WeatherDetailLeftCard data={data} loading={isLoading} />
              <WeatherCenterCard data={data.forecast} loading={isLoading} />
            </div>
          </div>
          <div className="w-2/6">
            <WeatherDetailRightCard data={data} loading={isLoading} />
          </div>
        </div>
        <motion.button
          onClick={close}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className=" w-full text-center cursor-pointer mt-10 mb-5 px-4 py-2 bg-[#276678] text-white rounded-2xl"
        >
          Kapat
        </motion.button>
      </div>
    </Modal>
  );
};

export default WeatherDetail;
