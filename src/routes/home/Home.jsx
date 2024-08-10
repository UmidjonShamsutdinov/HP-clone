import React from 'react'
import PreNav from '../../components/pre-nav/PreNav'
import Nav from '../../components/nav/Nav'
import HeyThere from '../../components/hey-there/HeyThere'
import BeFriends from '../../components/be-friends/BeFriends'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import "./Home.scss"
import { Container } from '../../utils/Utils'

const Home = () => {
  return (
    <div>
        <PreNav/>
        <Nav/>
        <div className="sticky__info">
          <div className="sticky-div">
            <Container>
              <div className="stick__info">
                <h2>Back to School Buyers Guide. Unlock your A+ potential with powerful tech from HP.</h2>
                <Link to={"/"}>Shop</Link>  
              </div>
            </Container>
          </div>
          <HeyThere/>
          <BeFriends/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home