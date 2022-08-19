import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "./../../client";
import "./AboutCountry.scss";
const AboutCounrty = () => {
  const [activeFilter, setActiveFilter] = useState("Greece");
  const [animateImg, setAnimateImg] = useState({ x: 0, opacity: 1 });
  const [tourist, setTourist] = useState([]);
  const [filterTourist, setFilterTourist] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutTourist"]';
    client.fetch(query).then((data) => {
      setTourist(data);
      setFilterTourist(data);
    });
  }, []);

  const handleChangeTourist = (item) => {
    setActiveFilter(item);
    setAnimateImg([{ x: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateImg([{ x: 0, opacity: 1 }]);
      setFilterTourist(
        tourist.filter((prevTourist) => prevTourist.countryName.includes(item))
      );
    }, 1000);
  };
  return (
    <div className='app__about-country'>
      <div className='app__about-country-tours'>
        <div className='app__tours'>
          <div className='app__tours-head'>
            <div className='app__tours-text'>
              {filterTourist.map((item, index) => (
                <motion.div
                  key={item + index}
                  animate={animateImg}
                  transition={{ duration: 0.5 }}
                >
                  <h2>{item.countryName}</h2>
                  <p>{item.countryText}</p>
                </motion.div>
              ))}
            </div>
            <nav className='app__tours-head-nav app__flex'>
              {["Serbia", "Greece", "Denmark", "Norway"].map((item, index) => (
                <div className='app__tours-nav-item ' key={index}>
                  <span
                    onClick={() => handleChangeTourist(item)}
                    className={activeFilter === item ? "active" : ""}
                  >
                    {" "}
                    {item}
                  </span>
                </div>
              ))}
            </nav>
          </div>
          <div className='app__control'>
            {filterTourist.map((item, index) => (
              <motion.div
                className='app__tours-body app__grid'
                key={index}
                animate={animateImg}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
              >
                <div className='app__tours-holder'>
                  <img src={urlFor(item.img1)} alt='' />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className='app__span-holder'
                  >
                    <motion.span
                      whileHover={{ x: [100, 0], opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.bestOfCountry}
                    </motion.span>
                  </motion.div>
                </div>
                <div className='app__tours-holder'>
                  <img src={urlFor(item.img2)} alt='' />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className='app__span-holder'
                  >
                    <motion.span
                      whileHover={{ x: [-100, 0], opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.bestOfCountry}
                    </motion.span>
                  </motion.div>
                </div>
                <div className='app__tours-holder'>
                  <img src={urlFor(item.img3)} alt='' />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className='app__span-holder'
                  >
                    <motion.span
                      whileHover={{ x: [100, 0], opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.bestOfCountry}
                    </motion.span>
                  </motion.div>
                </div>
                <div className='app__tours-holder'>
                  <img src={urlFor(item.img4)} alt='' />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className='app__span-holder'
                  >
                    <motion.span
                      whileHover={{ x: [-100, 0], opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.bestOfCountry}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounrty;
