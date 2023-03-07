import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
//-----css----
import './navbar.css'
//----image---
import logo from '../../images/logo.webp'
function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const [sliderClicked, setSliderClicked] = useState(false)
    const menuClicked = () => {
        setSliderClicked(!sliderClicked)
    }

    return (
        <>
            <div className='navContainer'>
                <div className='navContainerBox'>
                    <img src={logo} />
                    <div className='navContainerBoxItem'>
                        <ul>
                            <li><a href='#home'>HOME</a></li>
                            <li><a href='#services'>SERVICES</a></li>
                            <li><a href='#clients'>CLIENTS</a></li>
                            <li><a href='#contact-us'>CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className='MobileNavContainerBoxItem'>
                        <span onClick={menuClicked}>
                            <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#35637a" />
                        </span>

                    </div>
                </div>

            </div>
            <span className='spanMenuContainer'></span>
            <div className={sliderClicked ? 'MenuSliderContainerBlock' : 'MenuSliderContainerNone'}>
                <div className='MenuSliderContainerBox'>
                    <ul>
                        <li><a href='#home'>HOME</a></li>
                        <li><a href='#services'>SERVICES</a></li>
                        <li><a href='#clients'>CLIENTS</a></li>
                        <li><a href='#contact-us'>CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar