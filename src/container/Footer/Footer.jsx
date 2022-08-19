import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client } from "../../client";
import "./Footer.scss";
export const Footer = () => {
  const [isFormSubmitt, setIsFormSubmitt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { name, lastName, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitt(true);
    });
  };
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <div id='contact' className='app__contact'>
      <h2>Contact us</h2>
      {!isFormSubmitt ? (
        <motion.form
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onSubmit={handleSubmit}
          className='app__footer-form app__flex '
        >
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              name='name'
              value={name}
              required
              onChange={handleChange}
            />
            <input
              type='text'
              className='p-text'
              placeholder='Your Last Name'
              name='lastName'
              value={lastName}
              required
              onChange={handleChange}
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              name='email'
              value={email}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your message'
              name='message'
              value={message}
              required
              onChange={handleChange}
            />
          </div>
          <button>
            <span> {!loading ? "Send Message" : "Sending..."}</span>
          </button>
        </motion.form>
      ) : (
        <div>
          <motion.h3
            className='head-text'
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
            style={{ color: "var(--white-color)" }}
          >
            Thank you for trusting us!
          </motion.h3>
        </div>
      )}
      <p>
        Copyright © {date} All rights reserved | This template is made with{" "}
        <span style={{ color: "red" }}>♥</span> by{" "}
        <a
          href='https://nemanjadjordjevicportfolio.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          Nemanja Djordjevic
        </a>
      </p>
    </div>
  );
};
