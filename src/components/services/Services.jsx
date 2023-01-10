import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
          </ul>
        </article>

        {/** End of Web Dev */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Nulla Lorem commodo officia excepteur id minim exercitation
                tempor in quis non.
              </p>
            </li>
          </ul>
        </article>

        {/** End of Web Dev */}
      </div>
    </section>
  );
}

export default Services;
