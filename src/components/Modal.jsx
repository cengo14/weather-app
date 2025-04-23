import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: { scale: 0.3, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
  exit: {
    scale: 0.3,
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

const Modal = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropIn}
          // Dışına tıklayınca kapanması için
        >
          <motion.div
            className="w-[90vw] min-h-[90vh] bg-[#D3E0EA] px-5 rounded-2xl shadow-md text-black"
            variants={dropIn}
            // İçeriğe tıklanınca kapanmaması için
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
