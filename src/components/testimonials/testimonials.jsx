import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = () => {

  const data =[
  {
    avatar : Avt1,
    name : "Seerat Umar",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur ea laborum ducimus culpa temporibus odio quis odit. Consequuntur esse dolor sunt neque iure quibusdam dicta libero quam repudiandae harum!"
  },
  {
    avatar : Avt2,
    name : "Qasim Boota",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur ea laborum ducimus culpa temporibus odio quis odit. Consequuntur esse dolor sunt neque iure quibusdam dicta libero quam repudiandae harum!"
  },
  {
    avatar : Avt3,
    name : "Abdul Rehman",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur ea laborum ducimus culpa temporibus odio quis odit. Consequuntur esse dolor sunt neque iure quibusdam dicta libero quam repudiandae harum!"
  },
  {
    avatar : Avt4,
    name : "Kashf Rehman",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur ea laborum ducimus culpa temporibus odio quis odit. Consequuntur esse dolor sunt neque iure quibusdam dicta libero quam repudiandae harum!"
  },
  
]

  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     
      >

        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}


export default testimonials
