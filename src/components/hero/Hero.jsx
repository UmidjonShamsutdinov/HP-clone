import React from 'react'
import "./Hero.scss"
import { Container } from '../../utils/Utils'
import {heroBanner} from "../../db/data.json"
import HeroBanner from '../../helpers/hero-banner/HeroBanner'




import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';





const Hero = () => {
  return (
    <div className='hero__main'>
          <div className="hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper hero-swiper"
            >
              {
                heroBanner.map((product, index)=>
                  <SwiperSlide key={index} className='hero-slide-swiper'>
                    {
                      product.linkText2 ?  <HeroBanner title={product.title} description={product.description} img={product.img} startingPrice={product.startingPrice} link={product.link} type={product.type} linkText={product.linkText} linkText2={product.linkText2} lineColor={product.lineColor}/> : <HeroBanner title={product.title} description={product.description} img={product.img} startingPrice={product.startingPrice} link={product.link} type={product.type} linkText={product.linkText} lineColor={product.lineColor}/>
                    }
                  </SwiperSlide>
                
                )
              }
            </Swiper>
          </div>
    </div>
  )
}

export default Hero