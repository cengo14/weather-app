import React, { useEffect, useState } from "react";
import axios from "axios";
import Turkey from "@react-map/turkey";
import { motion } from "framer-motion";

const WeatherMap = ({ setCity }) => {
  const selectCity = (sc) => {
    if (sc === "Hakkâri") {
      setCity("Hakkari");
    } else if (sc === "Şırnak") {
      setCity("Sirnak");
    } else {
      setCity(sc);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="border-gray-200 w-4/6 h-auto bg-[#D3E0EA] rounded-2xl shadow-lg hover:shadow-xl transition p-5"
    >
      <Turkey
        strokeColor="white"
        strokeWidth={"1px"}
        mapColor="#276678"
        size={"100%"}
        selectColor="#DA0037"
        hoverColor="#1687A7"
        type="select-single"
        hints={true}
        hintTextColor="white"
        hintBackgroundColor="black"
        hintBorderColor="white"
        onSelect={selectCity}
      />
    </motion.div>
  );
};

export default WeatherMap;
