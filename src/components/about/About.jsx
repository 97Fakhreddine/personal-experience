import React from 'react';
import './about.css';
import ME from '../../assets/images/me-about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <section id="about">
      <h5>{t('ABOUT_TITLE_H5')}</h5>
      <h2>{t('ABOUT_TITLE_H2')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" className="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t('EXPERIENCE_TITLE')}</h5>
              <small>{t('EXPERIENCE_P')}</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t('CLIENT_TITLE')}</h5>
              <small>{t('CLIENT_P')}</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t('PROJECT_TITLE')}</h5>
              <small>{t('PROJECT_P')}</small>
            </article>
          </div>
          <p>{t('DESCRIPTION')}</p>
          <a href="#contact" className="btn btn-primary">
            {t('CONTACT_BTN')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
