import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/images/avatar1.jpg';
import AVATAR2 from '../../assets/images/avatar2.jpg';
import AVATAR3 from '../../assets/images/avatar3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

function Testimonials() {
  const testimonialData = [
    {
      id: 1,
      image: AVATAR1,
      title: 'Earnest Achiever',
      description: 'Sit duis aliqua ad est irure.',
    },
    {
      id: 2,
      image: AVATAR2,
      title: 'Earnest Achiever',

      description: 'Sit duis aliqua ad est irure.',
    },
    {
      id: 3,
      image: AVATAR3,
      title: 'Earnest Achiever',
      description: 'Sit duis aliqua ad est irure.',
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review My Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {testimonialData.map((e, index) => {
          return (
            e && (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={e.image} className="img" />
                </div>
                <h5 className="client__name">{e.title}</h5>
                <small className="client__review">{e.description}</small>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
