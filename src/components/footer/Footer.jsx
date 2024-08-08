import React from 'react'
import "./Footer.scss"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Container } from '../../utils/Utils'
import { BiChevronDown } from 'react-icons/bi'
import {footerLinks, copyright} from "../../db/data.json"
import { Link } from 'react-router-dom'
import DynamicIcon from '../../helpers/dynamic-icon/DynamicIcon'



const Footer = () => {
    const mainLinks = footerLinks.filter(links=>(links["main-links"]))[0]["main-links"]
    const helperLinks = footerLinks.filter(links=>(links["helper-links"]))[0]["helper-links"]
  return (
    <footer className='footer'>
        <div className="hr-line hr-line2 hr-line3"></div>
        <Container>
            <div className="footer__main">
                <div className="footer__related-links">
                    <h3>Related links <BiChevronDown/></h3>
                    <div className="footer__related-links-hidden">
                        {/* related links are here */}
                    </div>
                </div>
                <div className="hr-line hr-line2"></div>
                <div className="footer__country-selector">
                    <p>Country/Region : United States</p>
                </div>
                <div className="hr-line hr-line2"></div>
                <div className="footer__main-links">
                    {
                        mainLinks.map((links, index)=>
                            <div className="main__links" key={index}>
                                {
                                    links.link !== "/" ? <Link to={links.link}>{links.title}</Link>
                                    : <p>{links.title}</p> 
                                }
                                <div className={links.title !== "Stay connected" ? "footer__sub-links" : "footer__sub-links social__links"}>
                                    {
                                        links.subLinks.map((subLink, index)=>
                                            links.title !== "Stay connected" ? <Link key={index} to={subLink.title}>{subLink.title}</Link>
                                        : <Link key={index} to={subLink.link}><DynamicIcon iconName={subLink.title}/></Link>                        
                                    )
                                }
                                </div>
                            </div>
                            
                        )            
                    }
                </div>
                <div className="hr-line hr-line2"></div>
                <div className="helper__links">
                    {
                        helperLinks.map((links, index)=>
                            <Link key={index} to={links.link}>{links.title} {helperLinks.length-1 !== index && <span></span>}</Link>
                        )                                        
                    }
                </div>
                <div className="copyright">
                    <p>{copyright}</p>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer