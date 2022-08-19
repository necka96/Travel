import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "./../../client";
import "./Header.scss";
const Header = () => {
  const [activeFilter, setActiveFilter] = useState("Greece");
  const [animateImg, setAnimateImg] = useState({ y: 0, opacity: 1 });
  const [countryImg, setCountryImg] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);

  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then((data) => {
      setFilterCountry(data);
      setCountryImg(data);
    });
  }, []);

  const handleCountry = (item) => {
    setActiveFilter(item);
    setAnimateImg([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateImg([{ y: 0, opacity: 1 }]);
      setFilterCountry(
        countryImg.filter((countryImg) => countryImg.country.includes(item))
      );
    }, 1000);
  };
  return (
    <header id='home' className='app__header app__flex'>
      <nav className='app__flex'>
        {["Serbia", "Greece", "Denmark", "Norway"].map((item, index) => (
          <div key={index} className='app__header-item app__flex'>
            <span className='line'></span>
            <div
              className={activeFilter === item ? "active" : ""}
              onClick={() => handleCountry(item)}
            >
              {item}
            </div>
            <span className='line'></span>
          </div>
        ))}
      </nav>
      <div className='img'>
        {filterCountry.map((item, index) => (
          <motion.img
            animate={animateImg}
            transition={{ duration: 0.5 }}
            src={urlFor(item.image)}
            key={index}
            alt=''
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
