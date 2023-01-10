import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../constants/constant';

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID);
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>fakhry.messaoudi@gmail.com</h5>
            <a href="mailto:fakhry.messaoudi@gmail.com" target="__blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Faa khri</h5>
            <a href="https://m.me/Fakhri.Shaarawy" target="__blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+216 50 769 755</h5>
            <a
              href="https://api.whatsapp.com/send?phone+21650769755"
              target="__blank"
            >
              Send a message
            </a>
          </article>

          {/** End of Contact */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="subject" required placeholder="Subject" />
          <input type="text" name="name" required placeholder="Your Name" />
          <input type="email" name="email" required placeholder="Your Email" />
          <textarea
            rows="7"
            name="message"
            required
            placeholder="Your Message"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
