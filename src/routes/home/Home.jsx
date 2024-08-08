import React from 'react'
import PreNav from '../../components/pre-nav/PreNav'
import Nav from '../../components/nav/Nav'
import HeyThere from '../../components/hey-there/HeyThere'
import BeFriends from '../../components/be-friends/BeFriends'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <PreNav/>
        <Nav/>
        <HeyThere/>
        <BeFriends/>
        <Footer/>
    </div>
  )
}

export default Home