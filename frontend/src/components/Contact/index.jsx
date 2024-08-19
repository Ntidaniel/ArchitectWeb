import { useGSAP } from '@gsap/react';
import axios from 'axios';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from 'react';
import "./Contact.css";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const container = useRef(null);

  useEffect(() => {
    axios.get('/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact/send', formData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

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
      .fromTo(".contact__form", { x: -100, opacity: 0 }, { opacity: 1, x: 0 })
      .fromTo(".option", { x: 100, opacity: 0 }, { opacity: 1, stagger: .5, x: 0 });

  }, { scope: container });

  return (
    <section id='contact' ref={container}>
      <div className="container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form__top">
            <h1 className="title">
              <span className="g-text">Join Forces with us!</span>
            </h1>
            <p className="text__muted">
              We build with precision and passion, creating structures that stand the test of time. It's as straightforward as that!
            </p>
          </div>
          <div className="contact__form__middle">
            <div className="row">
              <input type="text" placeholder='First name' name='firstname' className='control' value={formData.firstname} onChange={handleChange} required />
              <input type="text" placeholder='Last name' name='lastname' className='control' value={formData.lastname} onChange={handleChange} required />
            </div>
            <div className="row">
              <input type="email" placeholder='Email address' name='email' className='control' value={formData.email} onChange={handleChange} required />
              <input type="tel" placeholder='Phone number' name='phone' className='control' value={formData.phone} onChange={handleChange} required />
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control' value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className="contact__form__bottom">
            <button className="btn btn__primary" type="submit">Send Now </button>
          </div>
        </form>
        <div className="contact__options">
          {
            contacts.map((contact, index) => (
              <div className="option" key={index}>
                <div className="icon__container">
                  {contact.icon}
                </div>
                <h3 className="name">{contact.name}</h3>
                <h4 className="text__muted">{contact.value}</h4>
                <div>
                  <a href={"#"} className="btn btn__primary">Contact Us</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Contact;
