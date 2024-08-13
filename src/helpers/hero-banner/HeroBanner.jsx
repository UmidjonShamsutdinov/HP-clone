import React, { useEffect, useRef } from 'react'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import "./HeroBanner.scss"


const HeroBanner = ({type, title, description, link, img, startingPrice, linkText, linkText2, lineColor}) => {


    
    
  return (
    <div className='hero'>
            <div className={`hero__banner ${type}`}>
                <div className="hero__title">
                    {!title.split(" ").includes("Introducing") && <div className={`hr-line ${lineColor}`}></div>}
                    <Container>
                        <h2 className='hero__title-text'>{title}</h2>
                    </Container>
                    <div className={`hr-line ${lineColor}`}></div>
                    <Container>
                        <div className="hero-desc">
                            {
                                startingPrice && <p className='start-price'>{startingPrice}</p>
                            }
                            <p className='hero__description'>{description}</p>
                            {
                                !linkText2 ?
                                <Link to={link}>{linkText}</Link> 
                                :
                                <div className="link-texts">
                                    <Link to={link}>{linkText}</Link>
                                    <Link to={link}>{linkText2}</Link>
                                </div>                   
                            }
                        </div>
                    </Container>
                    

                </div>
                <img src={img} alt=""/>
            </div>              
    </div>
  )
}

export default HeroBanner