import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Nav,.scss";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__nav app__grid'>
      <div className='app__flex app_nav-menu'>
        <h2 className='logo'>
          <Link to='/'>WT.</Link>
        </h2>
        <ul className='app__flex app__nav-menu-item'>
          {["home", "about", "blogs", "testimonials", "contact"].map(
            (item, index) => (
              <li key={index}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className='app__flex app__nav-menu-icon'>
        <AiOutlineSearch />
        <AiOutlineUser />
      </div>
      <div className='app__flex app__menu-icon'>
        <HiMenu onClick={() => setToggle(true)} />
      </div>
      {toggle && (
        <motion.div
          className='app__mobile-menu app__flex'
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
        >
          <div className='app__close'>
            <AiOutlineClose onClick={() => setToggle(false)} />
          </div>
          <ul className='app__flex app__nav-mobile-menu-item'>
            {["home", "about", "blog", "testimonials", "contact"].map(
              (item, index) => (
                <li key={index}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
