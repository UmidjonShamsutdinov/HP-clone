import React, { useEffect, useRef } from 'react'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import "./HeroBanner.scss"


const HeroBanner = ({type, title, description, link, img, startingPrice}) => {


    
    
  return (
    <div className='hero'>
            <div className={`hero__banner ${type}`}>
                <div className="hero__title">
                    <div className="hr-line2"></div>
                    <h2>{title}</h2>
                    {
                        startingPrice && <p>{startingPrice}</p>
                    }
                    <p>{description}</p>
                    <Link to={link}>Shop</Link>                    
                </div>
                <img src={img} alt=""/>
            </div>              
    </div>
  )
}

export default HeroBanner