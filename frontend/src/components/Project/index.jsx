import React, { useRef, useEffect, useState } from 'react';
import "./Project.css";
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [projects, setProjects] = useState([]);
  const container = useRef(null);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    });
    timeline
      .from(".title", { y: -50, opacity: 0 })
      .from(".sub__title", { y: -50, opacity: 0 })
      .fromTo(".slick-slide", { x: 100, opacity: 0 }, { opacity: 1, stagger: .5, x: 0 });

  }, { scope: container });

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
        }
      }
    ]
  };

  return (
    <section id='project' ref={container}>
      <div className="project_top">
        <h1 className="title">Our <span className="g-text">Projects</span></h1>
        <h3 className="sub__title">
          Innovative construction projects, exceptional craftsmanship.
        </h3>
      </div>
      <Slider {...settings} className="projects__container">
        {
          projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project__picture">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="name">{project.title}</h3>
              <h5 className="sub__name text__muted">
                {project.subTitle}
              </h5>
              <p className="text__muted project__text">{project.description}</p>
              <button className="btn btn__primary">Explore more</button>
            </div>
          ))
        }
      </Slider>
    </section>
  )
}

export default Project;
