import React from 'react'
import "./BeFriends.scss"
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const BeFriends = () => {
  return (
    <div className='be-friends__main'>
        <Container>
            <div className="be-friends__title">
                <h2>Let's be friends</h2>
            </div>
        </Container>
        <div className="hr-line hr-line2"></div>
        <Container>
            <div className="be-friends__title2">
                <p>Get product tips, lifestyle tricks, and a window into our HP family.</p>
            </div>
        </Container>
        <div className="hr-line hr-line2"></div>
        <Container>
            <div className="be-friends__social">
                <Link to={"/"}><FaLinkedin/></Link>
                <Link to={"/"}><FaFacebook/></Link>
                <Link to={"/"}><FaInstagram/></Link>
                <Link to={"/"}><FaTwitter/></Link>
                <Link to={"/"}><FaYoutube/></Link>
                <Link to={"/"}><FaTiktok/></Link>
            </div>
        </Container>
    </div>
  )
}

export default BeFriends