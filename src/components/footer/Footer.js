import { Button } from '@mui/material'
import React from 'react'
//-----css----
import './footer.css'
//-----image-----
import logo from '../../images/logo.png'
//-----icons-----
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { TfiLinkedin } from 'react-icons/tfi'
import { BsFacebook } from 'react-icons/bs'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className='footerHolder' id="contact" >
            <div className='footerHolderContainer'>

                <div className='newsletterContainer'>

                    <div className='newsletterBox'>
                        <label>Subscribe to Our Newsletter</label>
                        <div className='newsletterBoxItem'>
                            <input type='email' placeholder='Enter Mail-Id' />
                            <Button variant='contained' style={{ backgroundColor: "#b37402" }}>Submit</Button>
                        </div>
                    </div>
                </div>
                <div className='FooterLinkContainer'>
                    <div className='FooterLinkContainerBox'>
                        <div className='FooterLogoContainer'>
                            <img src={logo} />
                            <p> 
                                Digital Storytelling and <br></br>Beyond
                            </p>
                            <div className='FooterLogoContainerBox'>
                                
                               <div className='footerLogoIcon'> <a href='https://www.instagram.com/woodheadcreative_official/'><AiFillInstagram /></a></div>
                               <div  className='footerLogoIcon'> <a href='https://twitter.com/WoodheadWhc'><FaTwitter /></a></div>
                               <div  className='footerLogoIcon'> <a href='https://www.linkedin.com/company/woodhead-creative/'><TfiLinkedin /></a></div>
                               <div  className='footerLogoIcon'> <a href='https://www.facebook.com/WoodHeadCreative'><BsFacebook /></a></div>
                            </div>
                        </div>
                        <div className='FooterQuickLinkContainer'>
                            <p>QUICK LINKS</p>
                            <a href="#" >Home</a>
                            <a href="#" >Services</a>
                            <a href="#" >Clients</a>
                            <a href="#" >Testimonials</a>

                        </div>
                        <div className='FooterQuickContackContainer'>
                            <p>QUICK CONTACT</p>
                            <p>Feel free to contact</p>
                            <p>+91-9840717144</p>
                            <p>woodheadcreative@gmail.com</p>
                        </div>
                        <div className='FooterAddressContainer'>
                            <p>OUR ADDRESS</p>
                            <p>WoodHeadCreative</p>
                            <p>D125/E, Santhosh Colony, K.K Nagar,Chennai - 600078</p>
                        </div>
                    </div>
                </div>
                <div className='CopyRightsContainer'>
                    <p>All rights are reserved by Woodhead Creative {year}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer