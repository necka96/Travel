import { motion } from "framer-motion";
import React from "react";
import "./Preloader.scss";
const Preloader = ({ loading, children }) => {
  if (loading) {
    const loader = {
      animation: {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        },
      },
    };

    return (
      <div className='app__loader-holder app__flex'>
        <motion.div
          className='app__loader app__flex'
          variants={loader}
          animate='animation'
        >
          <h2>Let's travel</h2>
        </motion.div>
      </div>
    );
  }

  return children;
};

export default Preloader;
