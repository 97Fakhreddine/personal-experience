import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../constants/constant';
import { useTranslation } from 'react-i18next';

function Contact() {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
        blockHeadless: true,
        limitRate: {
          id: 'portfolio-contact-form',
          throttle: 10000,
        },
      });
      e.target.reset();
    } catch (error) {
      console.error('Unable to send contact form.', error);
    }
  };

  return (
    <section id="contact">
      <h5>{t('CONTACT_TITLE_H5')}</h5>
      <h2>{t('CONTACT_TITLE_H2')}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>fakhry.messaoudi@gmail.com</h5>
            <a
              href="mailto:fakhry.messaoudi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('CONTACT_BTN')}
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Faa khri</h5>
            <a
              href="https://m.me/Fakhri.Shaarawy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('CONTACT_BTN')}
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+216 50 769 755</h5>
            <a
              href="https://api.whatsapp.com/send?phone=21650769755"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('CONTACT_BTN')}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="subject"
            required
            maxLength={120}
            placeholder={t('CONTACT_SUBJECT')}
          />
          <input
            type="text"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder={t('CONTACT_NAME')}
          />
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder={t('CONTACT_EMAIL')}
          />
          <textarea
            rows="7"
            name="message"
            required
            maxLength={2000}
            placeholder={t('CONTACT_MESSAGE')}
          />
          <button type="submit" className="btn btn-primary">
            {t('CONTACT_BTN')}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
