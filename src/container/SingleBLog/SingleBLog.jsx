import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { client, urlFor } from "./../../client";
import "./SingleBlog.scss";
const SingleBLog = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const navigation = useNavigate();

  const { slug } = useParams();
  const imgaeVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const imgaeVariantsTwo: Variants = {
    offscreenTwo: {
      scale: 0,
    },
    onscreenTwo: {
      scale: 1,
      rotate: -10,
      transition: {
        type: "keyframes",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const handleClick = () => {
    navigation("/", { replace: true });
  };
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const query = `*[_type == "blog" && slug.current == "${slug}"]`;
    client.fetch(query).then((data) => {
      setSingleBlogPost(data);
    });
  }, [slug]);
  return (
    <section>
      <div className='app__single-blog'>
        {singleBlogPost.map((item, index) => (
          <div key={index}>
            {item.post.map((postitem, index) => (
              <div key={index} className='app__single-blog-holder'>
                <div className='app__single-blog-header'>
                  <img src={urlFor(postitem.img8)} alt='' />
                  <h2>{item.title}</h2>
                  <div className='app__go-back app__flex' onClick={handleClick}>
                    <AiOutlineArrowLeft data-tip data-for='tooltip' />
                  </div>
                  <ReactTooltip
                    id='tooltip'
                    effect='solid'
                    arrowColor='#2f271f'
                  >
                    "Go to home page"
                  </ReactTooltip>
                </div>
                <div className='app__single-blog-text'>
                  <p>{postitem.blogText}</p>
                </div>
                <motion.div
                  className='app-single-blog-first-image-holder app__grid'
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.img
                    src={urlFor(postitem.img1)}
                    alt={item.title}
                    variants={imgaeVariants}
                  />
                  <motion.img
                    src={urlFor(postitem.img2)}
                    alt={item.title}
                    variants={imgaeVariants}
                  />
                  <motion.img
                    src={urlFor(postitem.img3)}
                    alt={item.title}
                    variants={imgaeVariants}
                  />
                  <motion.img
                    src={urlFor(postitem.img4)}
                    alt={item.title}
                    variants={imgaeVariants}
                  />
                </motion.div>
                <div className='app__single-blog-text'>
                  <p>{postitem.blogSecondText}</p>
                </div>
                <motion.div
                  initial='offscreenTwo'
                  whileInView='onscreenTwo'
                  viewport={{ once: true, amount: 0.8 }}
                  className='app-single-blog-second-image-holder app__grid'
                >
                  <motion.img
                    src={urlFor(postitem.img5)}
                    alt={item.title}
                    variants={imgaeVariantsTwo}
                  />
                  <motion.img
                    src={urlFor(postitem.img6)}
                    alt={item.title}
                    variants={imgaeVariantsTwo}
                  />
                  <motion.img
                    src={urlFor(postitem.img7)}
                    alt={item.title}
                    variants={imgaeVariantsTwo}
                  />
                </motion.div>
                <div className='app__single-blog-text'>
                  <p>{postitem.blogThirdText}</p>

                  <div className='app__flex app__single-blog-icon-holder'>
                    <div className='app__flex app__single-blog-socila-icon'>
                      <div>
                        <a
                          href='https://www.facebook.com/'
                          target='_blank'
                          rel='noreferrer'
                          data-for='tooltip2'
                          data-tip
                        >
                          {" "}
                          <AiFillFacebook />
                        </a>
                      </div>
                      <div className='app__flex'>
                        <a
                          href='https://www.instagram.com/'
                          rel='noreferrer'
                          target='_blank'
                          data-for='tooltip3'
                          data-tip
                        >
                          <AiOutlineInstagram />
                        </a>
                        <a
                          href='https://www.youtube.com/'
                          rel='noreferrer'
                          target='_blank'
                          data-for='tooltip4'
                          data-tip
                        >
                          <AiFillYoutube color='red' />
                        </a>
                      </div>
                    </div>
                    <div
                      className='app__flex app__go-home'
                      onClick={handleToTop}
                    >
                      <AiOutlineArrowUp data-tip data-for='tooltip5' />
                    </div>
                  </div>
                </div>
                <ReactTooltip id='tooltip2' effect='solid' arrowColor='#2f271f'>
                  "Facebook"
                </ReactTooltip>
                <ReactTooltip id='tooltip3' effect='solid' arrowColor='#2f271f'>
                  "Instagram"
                </ReactTooltip>
                <ReactTooltip id='tooltip4' effect='solid' arrowColor='#2f271f'>
                  "Youtube"
                </ReactTooltip>
                <ReactTooltip id='tooltip5' effect='solid' arrowColor='#2f271f'>
                  "Go to top"
                </ReactTooltip>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleBLog;
