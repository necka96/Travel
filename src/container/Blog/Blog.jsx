import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { client, urlFor } from "./../../client";
import "./Blog.scss";
const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blog"]';
    client.fetch(query).then((data) => {
      setBlog(data);
    });
  }, []);

  return (
    <section id='blogs' className='app__blogs'>
      <h2>Blogs</h2>
      <div className='app__blogs-items app__grid'>
        {blog.map((item, index) => (
          <motion.div
            className='app__blog'
            key={index}
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div>
              <img src={urlFor(item.blogImg)} alt={item.title} />

              <div className='app__blog-content app__flex'>
                <div className='app__blog-header'>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.introText}</p>

                <Link to={`/blog/${item.slug.current}`}>
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
