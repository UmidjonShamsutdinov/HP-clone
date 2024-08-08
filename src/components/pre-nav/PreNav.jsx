import React from 'react'
import "./PreNav.scss"
import { Container } from '../../utils/Utils'
import logo1 from "../../assets/zHP.png"
import logo2 from "../../assets/OMEN-logo.png"
import logo3 from "../../assets/poly@3x.png"
import logo4 from "../../assets/HYPER-X-logo.avif"
import { Link } from 'react-router-dom'

const PreNav = () => {
  return (
    <div className='preNav'>
        <Container>
            <div className="preNav__main">
                <Link to={"/"}>
                    <img src={logo1} alt="z-HP"/>                
                </Link>
                <Link to={"/"}>
                    <img src={logo2} alt="omen"/>
                </Link>
                <Link to={"/"}>
                    <img src={logo4} alt="hyper"/>
                </Link>
                <Link to={"/"}>
                    <img src={logo3} alt="poly"/>
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default PreNav