import React from 'react';
import './footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import {
  facebookURL,
  githubURL,
  instagramURL,
  linkedInURL,
} from '../../constants/constant';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <a href={githubURL} className="footer__logo" target="__blank">
        {t('MY_NAME')}
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">{t('HOME')}</a>
        </li>
        <li>
          <a href="#about">{t('ABOUT')}</a>
        </li>
        <li>
          <a href="#experience">{t('EXPERIENCE')}</a>
        </li>
        <li>
          <a href="#services">{t('SERVICES')}</a>
        </li>
        <li>
          <a href="#portfolio">{t('PORTFOLIO')}</a>
        </li>
        <li>
          <a href="#testimonials">{t('TESTIMONIALS')}</a>
        </li>
        <li>
          <a href="#contact">{t('CONTACT')}</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={facebookURL}>
          <FaFacebookF />
        </a>
        <a href={instagramURL}>
          <FiInstagram />
        </a>
        <a href={linkedInURL}>
          <FiLinkedin />
        </a>

        <a href={githubURL}>
          <FiGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {t('COPY_RIGHT')}</small>
      </div>
    </footer>
  );
}

export default Footer;
