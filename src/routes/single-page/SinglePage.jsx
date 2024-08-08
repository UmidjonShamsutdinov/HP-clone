import React from 'react'
import "./SinglePage.scss"
import {allProducts} from "../../db/data.json"
import { Container } from '../../utils/Utils';




import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import TextRating from '../../mui components/rating/TextRating';



const SinglePage = () => {
    const singleProduct = allProducts.filter((product)=>product.id === +window.location.pathname.split("/")[2])[0]
    const spanText = singleProduct.description.split(",")
    
    
  return (
    <div className='single-page__main'>
        <Container>
            <div className="single-page" >
                <div className="swipe-image">
                    <Swiper
                        pagination={{
                        type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        
                    >
                        {
                            singleProduct.img.map((img, index)=>
                                <SwiperSlide key={index}>
                                    <img src={img} alt="" />
                                </SwiperSlide>                            
                            )
                        }
                    </Swiper>
                </div>
                <TextRating rate={singleProduct.rate}/>
                <p>Name : {singleProduct.title}</p>
                <p>Serial Number : {singleProduct.sn}</p>
                <p>Price : ${singleProduct.price}</p>                
                <div className="single__description">
                    {
                        spanText.map((txt, index)=>
                        <p key={index}>{txt} {spanText.length-1 != index && <span className='dot-between'></span>}</p>                        
                        )
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default SinglePage