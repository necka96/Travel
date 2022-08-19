import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import AboutCounrty from "./../../components/AboutCountry/AboutCounrty";
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <section id='about' className='app__about'>
      <AboutCounrty />
      {about.map((item, index) => (
        <div className='app__about-content app__grid' key={index}>
          <motion.div
            className='app__about-text'
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.6 }}
          >
            <h2>About Us</h2>
            <p>{item.aboutUs}</p>
          </motion.div>
          <motion.div
            className='app__about-img'
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
          >
            <motion.img
              src={urlFor(item.image)}
              alt='about-image'
              whileHover={{ scale: 1.5, rotate: 15 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default About;
