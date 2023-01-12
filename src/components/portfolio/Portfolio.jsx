import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.png';
import IMG6 from '../../assets/images/portfolio6.jpg';
import allProjects from '../../mock/portfolio';

function Portfolio() {
  const portfolioData = [
    {
      id: '1',
      image: IMG1,
      title: 'Some titles',
      github: 'repo link ... ',
      demo: '',
    },
    {
      id: '2',
      image: IMG2,
      title: 'Some titles',
      github: 'repo link ... ',
      demo: '',
    },
    {
      id: '3',
      image: IMG3,
      title: 'Some titles',
      github: 'repo link ... ',
      demo: '',
    },
    {
      id: '4',
      image: IMG4,
      title: 'Some titles',
      github: 'repo link ... ',
      demo: '',
    },
    {
      id: '5',
      image: IMG5,
      title: 'Some titles',
      github: 'repo link ... ',
      demo: '',
    },
    {
      id: '6',
      image: IMG6,
      title: 'Some titles',
      github: 'repo link ... ',
      demo: '',
    },
  ];

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
                  <img src={e.image} alt="" />
                </div>
                <h3>{e.title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={e.github}
                    aria-disabled={!e.demo}
                    className="btn"
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
