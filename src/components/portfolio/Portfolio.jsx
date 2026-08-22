import React from 'react';
import './portfolio.css';
import allProjects from '../../mock/portfolio';

const images = import.meta.glob('../../assets/images/*', {
  eager: true,
  import: 'default',
});

function Portfolio() {
  const fetchLocalImage = (imageName) =>
    images[`../../assets/images/${imageName}`] || '';

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {allProjects.map((project) =>
          project ? (
            <article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <img
                  src={fetchLocalImage(project.image)}
                  alt={project.title || 'Portfolio project'}
                />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-cta">
                {project.github ? (
                  <a
                    href={project.github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                ) : (
                  <span className="btn cursor-disable" aria-disabled="true">
                    Github
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span
                    className="btn btn-primary cursor-disable"
                    aria-disabled="true"
                  >
                    Live Demo
                  </span>
                )}
              </div>
            </article>
          ) : null
        )}
      </div>
    </section>
  );
}

export default Portfolio;
