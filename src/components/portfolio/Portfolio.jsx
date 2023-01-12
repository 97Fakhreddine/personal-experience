import React from 'react';
import './portfolio.css';
import allProjects from '../../mock/portfolio';

function Portfolio() {
  const fetchLocalImage = (imageName) => {
    const image = require('../../assets/images/' + imageName);
    return image;
  };
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {allProjects.map((e, index) => {
          return (
            e && (
              <article className="portfolio__item" key={e.id}>
                <div className="portfolio__item-image">
                  <img src={fetchLocalImage(e.image)} alt="" />
                </div>
                <h3>{e.title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={e.github ? e.github : 'javascript:void(0)'}
                    aria-disabled={!e.github}
                    className={e.github ? 'btn' : 'btn cursor-disable'}
                    target="__blank"
                  >
                    Github
                  </a>
                  <a
                    aria-disabled={!e.demo}
                    href={e.demo}
                    className="btn btn-primary"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            )
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
