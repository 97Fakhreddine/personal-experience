import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/images/avatar1.jpg';
import AVATAR2 from '../../assets/images/avatar2.jpg';
import AVATAR3 from '../../assets/images/avatar3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
        {testimonialData.map((testimonial) => (
          <SwiperSlide className="testimonial" key={testimonial.id}>
            <div className="client__avatar">
              <img
                src={testimonial.image}
                className="img"
                alt={testimonial.title}
              />
            </div>
            <h5 className="client__name">{testimonial.title}</h5>
            <small className="client__review">{testimonial.description}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
