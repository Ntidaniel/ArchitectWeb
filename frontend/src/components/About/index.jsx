import React,{useRef} from 'react'
import "./About.css"
import { about_image,building_1,building_2,building_3 } from '../../assets'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const container = useRef(null)
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      }
    })
    timeline
    .from(
      ".company__photo",
      {x:-50,opacity:0}
  )
  .from(
    ".title",
    {y:-50,opacity:0}
  )
  .from(
    ".sub__title",
    {y:-50,opacity:0}
  )
  .from(
    ".box",
    {x:50,opacity:0,stagger:.5}
  )
  .from(
    ".description",
    {y:50,opacity:0}
  )
  .from(
    ".group",
    {y:50,opacity:0}
  )
  .from(
    ".buttons__container",
    {y:50,opacity:0}
  )
  },{scope:container})
  return (
    <section id='about' ref={container}>
      <div className="container">
        <div className="column company__photo">
          <img src={about_image} alt="Felix Gee" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className="g-text">About Us</span>
          </h1>
          <h3 className="sub__title">Realizing visions through fundamental focus.</h3>
          <div className="company__media__container">
            <div className="box">
              <img src={building_1} alt="" />
            </div>
            <div className="box">
              <img src={building_2} alt="" />
            </div>
            <div className="box">
              <img src={building_3} alt="" />
            </div>
          </div>
          <p className="text__muted description">
          We blend visionary design with a focus on the . 
          fundamentals to create inspiring, lasting spaces
          Our commitment to excellence and innovation ensures
          every project reflects our clients' unique aspirations and needs.
          </p>
          <div className="group">

            <div className="row">
              <div className="icon__container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text__muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon__container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text__muted">Expect</p>
                <h3>Engineers</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon__container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text__muted">Constumer</p>
                <h3>Support</h3>
              </div>
            </div>


            <div className="row">
              <div className="icon__container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text__muted">Quality</p>
                <h3>Services</h3>
              </div>
            </div>
          </div>
          <div className="buttons__container">
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn__primary">Get a quote</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About