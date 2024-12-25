import React, { useEffect, useState } from 'react'
import "./Nav.scss"
import { Container } from '../../utils/Utils'
import hpLogo from "../../assets/HP.png"
import { Link } from 'react-router-dom'
import navData from "../../db/data.json"
import { IoIosSearch} from "react-icons/io";
import { IoCartOutline, IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiSquareRemove } from 'react-icons/ci'
import logo1 from "../../assets/zHP.png"
import logo2 from "../../assets/OMEN-logo.png"
import logo3 from "../../assets/poly@3x.png"
import logo4 from "../../assets/HYPER-X-logo.avif"


const Nav = () => {
    const [hamburger, setHamburger] = useState(false)
    const [commits, setCommits] = useState("none")

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
                <div className="nav__commits">
                    <div className="nav__search">
                        <input type="text" placeholder='Search HP.com'/>
                        <button type='button'><IoIosSearch/></button>
                    </div>
                    
                    <Link to={"/"} className='mobile-search'><IoIosSearch/></Link>
                    <Link to={"/"} className='cart'><IoCartOutline/></Link>
                    <Link to={"/"} className='signIn'>Sign In</Link>
                    <Link to={"/"} className='signIn-person'><IoPerson/></Link>
                    <RxHamburgerMenu className={`menu__hamburger menu__hamburger${hamburger}`} onClick={activeHamburger}  style={{display: `${commits}`}}/>
                    <CiSquareRemove className='menu__remove' style={{display: `${commits === 'none' ? "flex" : "none"}`}} onClick={activeHamburger}/>
                </div>
                <div className="nav__hidden-menu" style={{display: `${commits === 'none' ? "none" : "flex"}`}}>
                    <div className="nav__hidden-links">
                        <ul>
                            {
                                navData['navLinks'].map((navMenu,index)=>
                                    <li key={index}>
                                        {navMenu.title}
                                    </li>
                                )
                            }
                        </ul>

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
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Nav