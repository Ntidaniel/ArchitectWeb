import { useGSAP } from '@gsap/react';
import axios from 'axios';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';
import { MdOutlineThumbUpOffAlt } from 'react-icons/md';
import { blogs } from '../../data';
import "./Blog.css";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });
    timeline
      .from(".title", { y: -50, opacity: 0 })
      .from(".sub__title", { y: -50, opacity: 0 })
      .fromTo(".blog__card", { y: 100, opacity: 0 }, { opacity: 1, stagger: 0.5, y: 0 });
  }, { scope: container });

  return (
    <section id='blog' ref={container}>
      <div className="container">
        <h1 className="title">
          <span className="g-text">Recent Blog Posts</span>
        </h1>
        <h3 className="sub__title">Explore our articles</h3>
        <div className="blog__container">
          {blogs.map((blog, index) => (
            <div className="blog__card" key={index}>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <p className="category">{blog.category}</p>
                <div className="picture">
                  <img src={blog.blog} alt={blog.title} />
                </div>
                <div className="details">
                  <h3>{blog.title}</h3>
                  <div className="buttons__container">
                    <button className="btn">
                      <BsCalendar2Date />
                      {new Date(blog.date).toLocaleDateString()}
                    </button>
                    <button className="btn">
                      <MdOutlineThumbUpOffAlt />
                      {blog.likeCount}
                    </button>
                    <button className="btn">
                      <FaRegCommentDots />
                      {blog.commentCount}
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
