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
                <Link to={"https://www.hp.com/us-en/workstations/workstation-pcs.html?jumpid=va_d08cf5d452"}>
                    <img src={logo1} alt="z-HP"/>                
                </Link>
                <Link to={"https://www.omen.com/us/en.html?jumpid=va_d08b17a763"}>
                    <img src={logo2} alt="omen"/>
                </Link>
                <Link to={"https://www.hp.com/us-en/poly.html?jumpid=va_ww_mu_mk_hc_r12129_aw_x_10957"}>
                    <img src={logo4} alt="hyper"/>
                </Link>
                <Link to={"https://hyperx.com/?jumpid=va_d08fc7f0c6"}>
                    <img src={logo3} alt="poly"/>
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default PreNav