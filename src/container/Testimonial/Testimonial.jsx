import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { client, urlFor } from "./../../client";
import "./Testimonial.scss";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id='testimonials' className='app__testimonials-wraper  app__flex'>
      <div className='app__testimonials'>
        <h2>Testimonials</h2>
        {testimonials.length && (
          <div className='app__single-testimonial-holder'>
            <motion.div
              className='app__single-testimonial
            app__flex'
              whileInView={{
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5 }}
            >
              <img src={urlFor(testimonials[currentIndex].img)} alt='' />
              <div className='app__testimonals-text'>
                <h3>{testimonials[currentIndex].name}</h3>
                <p>"{testimonials[currentIndex].text}"</p>
              </div>
            </motion.div>

            <div className='app__testimonilas-nav app__flex'>
              <div
                className='app__flex'
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>
              <div
                className='app__flex'
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
