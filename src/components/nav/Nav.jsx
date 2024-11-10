import React, { useEffect, useState } from 'react'
import "./Nav.scss"
import { Container } from '../../utils/Utils'
import hpLogo from "../../assets/HP.png"
import { Link } from 'react-router-dom'
import navData from "../../db/data.json"
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiSquareRemove } from 'react-icons/ci'


const Nav = () => {
    const [hamburger, setHamburger] = useState(false)
    const [commits, setCommits] = useState("flex")

    const activeHamburger = ()=>{
        setHamburger(!hamburger)
        if(commits === "flex"){
            setCommits("none")
            console.log(123);            
        }
        else{
            setCommits("flex")
            console.log(456);            
        }        
    }
    
  return (
    <div className='nav'>
        <Container>
            <div className="nav__main">
                <div className="nav__links">
                    <h1 style={{display: "none"}}>HP</h1>
                    <Link to={"/"}><img src={hpLogo} alt=""/></Link>
                    <div className="navMenu">
                        <ul>
                            {
                                navData['navLinks'].map((navMenu,index)=>
                                    <li key={index}>
                                        {navMenu.title}
                                    </li>
                                )
                            }
                        </ul>
                    </div>                
                </div>
                <div className="nav__commits" style={{display: `${commits}`}}>
                    <div className="nav__search">
                        <input type="text" placeholder='Search HP.com'/>
                        <button type='button'><IoIosSearch/></button>
                    </div>
                    <IoIosSearch className='mobile-search'/>
                    <Link to={"/"} className='cart'><IoCartOutline/></Link>
                    <Link to={"/"} className='signIn'>Sign In</Link>
                    <Link to={"/"} className='signIn-person'><IoPerson/></Link>
                    <RxHamburgerMenu className={`menu__hamburger menu__hamburger${hamburger}`} onClick={activeHamburger}/>
                </div>
                <CiSquareRemove className='menu__remove' style={{display: `${commits === 'flex' ? "none" : "block"}`}} onClick={activeHamburger}/>
            </div>
        </Container>
    </div>
  )
}

export default Nav