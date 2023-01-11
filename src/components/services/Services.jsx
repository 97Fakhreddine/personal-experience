import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import data from './i18n/en';

function Services() {
  const { t } = useTranslation();

  const createList = (name) => {
    const result = [];
    for (const key in data) {
      if (key.toString().indexOf(name) > -1) {
        result.push(
          <li>
            <BiCheck className="service__list-icon" />
            <p>{t(key)}</p>
          </li>
        );
      }
    }
    return result;
  };

  return (
    <section id="services">
      <h5>{t('SERVICES_TITLE_H5')}</h5>
      <h2>{t('SERVICES_TITLE_H2')}</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>{t('SERVICES_1')}</h3>
          </div>
          <ul className="service__list">
            {createList('SERVICES_1_SUB').map((e) => e)}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t('SERVICES_2')}</h3>
          </div>

          <ul className="service__list">
            {createList('SERVICES_2_SUB').map((e) => e)}
          </ul>
        </article>

        {/** End of Web Dev */}

        <article className="service">
          <div className="service__head">
            <h3>{t('SERVICES_3')}</h3>
          </div>

          <ul className="service__list">
            {createList('SERVICES_3_SUB').map((e) => e)}
          </ul>
        </article>

        {/** End of Web Dev */}
      </div>
    </section>
  );
}

export default Services;
