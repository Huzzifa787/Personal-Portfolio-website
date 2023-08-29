import React, {useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';


const Contact = (props) => {
  const form = useRef();
  
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hqwvgvt', 'template_04yzri7', form.current, 'V9YUitYHz4HTtzUxN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>huzzifa67@gmail.com</h5>
            <a href="mailto: huzzifa67.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Huzzifa Hafeez</h5>
            <a href="https://m.me/huzaifa.hafeez.1420" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923327549370</h5>
            <a href="https://web.whatsapp.com/send?phone=+923327549370" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact