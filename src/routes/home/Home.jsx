import React from 'react'
import PreNav from '../../components/pre-nav/PreNav'
import Nav from '../../components/nav/Nav'
import HeyThere from '../../components/hey-there/HeyThere'
import BeFriends from '../../components/be-friends/BeFriends'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import "./Home.scss"
import { Container } from '../../utils/Utils'
import Hero from '../../components/hero/Hero'
import {stickyText} from "../../db/data.json"

const Home = () => {
  return (
    <div>
        <PreNav/>
        <Nav/>
        <div className="sticky__info">
          <div className="sticky-div">
            <Container>
              <div className="stick__info">
                <h2>{stickyText}</h2>
                <Link to={"/"}>Shop</Link>  
              </div>
            </Container>
          </div>
          <Hero/>
          <HeyThere/>
          <BeFriends/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home