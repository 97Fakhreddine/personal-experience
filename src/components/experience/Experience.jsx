import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience">
      <h5>{t('EXPERIENCE_TITLE_H5')}</h5>
      <h2>{t('EXPERIENCE_TITLE_H2')}</h2>

      <div className="container experience__container">
        <div className="container experience__frontend">
          <h3>{t('FRONT_END_TITLE')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>{t('EXPERIENCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Css/Scss</h4>
                <small>{t('EXPERIENCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small>{t('EXPERIENCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular/NGRx</h4>
                <small>{t('ADVANCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React/Redux</h4>
                <small>{t('ADVANCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Vue</h4>
                <small>{t('EXPERIENCED')}</small>
              </div>
            </article>
          </div>
        </div>
        {/** Backend cards */}
        <div className="container experience__backend">
          <h3>{t('BACK_END_TITLE')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small>{t('ADVANCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Nest JS</h4>
                <small>{t('ADVANCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <small>{t('MID_LEVEL')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small>{t('ADVANCED')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small>{t('BASIC')}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small>{t('BASIC')}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
