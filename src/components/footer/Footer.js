import { Button } from '@mui/material'
import React from 'react'
//-----css----
import './footer.css'
//-----image-----
import footerLogo from '../../images/footerLogo.png'
//-----icons-----
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { TfiLinkedin } from 'react-icons/tfi'
import { BsFacebook } from 'react-icons/bs'
import { Fade } from 'react-reveal'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className='footerHolder'>
            <div className='footerHolderContainer'>

                <div className='newsletterContainer'>

                    <div className='newsletterBox'>
                        <Fade bottom>
                            <label>Subscribe to Our Newsletter</label>
                        </Fade>
                        <div className='newsletterBoxItem'>
                            <Fade bottom>
                                <input type='email' placeholder='Enter Mail-Id' />
                            </Fade>
                            <Fade bottom>
                                <Button variant='contained' style={{ backgroundColor: "#b37402" }}>Submit</Button>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='FooterLinkContainer'>
                    <div className='FooterLinkContainerBox'>
                        <div className='FooterLogoContainer'>
                            <Fade bottom>
                                <img src={footerLogo} />
                            </Fade>
                            <Fade bottom>
                                <p>
                                    Digital Storytelling and Beyond
                                </p>
                            </Fade>
                            <div className='FooterLogoContainerBox'>
                                <Fade bottom>
                                    <div className='footerLogoIcon'> <a href='https://www.instagram.com/woodheadcreative_official/'><AiFillInstagram /></a></div>
                                </Fade>
                                <Fade bottom>
                                    <div className='footerLogoIcon'> <a href='https://twitter.com/WoodheadWhc'><FaTwitter /></a></div>
                                </Fade>
                                <Fade bottom>
                                    <div className='footerLogoIcon'> <a href='https://www.linkedin.com/company/woodhead-creative/'><TfiLinkedin /></a></div>
                                </Fade>
                                <Fade bottom>
                                    <div className='footerLogoIcon'> <a href='https://www.facebook.com/WoodHeadCreative'><BsFacebook /></a></div>
                                </Fade>
                            </div>
                        </div>
                        <div className='FooterQuickLinkContainer'>
                            <Fade bottom>
                                <p>QUICK LINKS</p>
                            </Fade>
                            <Fade bottom>
                                <a href="#" >Home</a>
                            </Fade>
                            <Fade bottom>
                                <a href="#services" >Services</a>
                            </Fade>
                            <Fade bottom>
                                <a href="#clients" >Clients</a>
                            </Fade>
                            <Fade bottom>
                                <a href="#test" >Testimonials</a>
                            </Fade>

                        </div>
                        <div className='FooterQuickContackContainer'>
                            <Fade bottom>
                                <p>QUICK CONTACT</p>
                            </Fade>
                            <Fade bottom>
                                <p>Feel free to contact</p>
                            </Fade>
                            <Fade bottom>
                                <p>+91-9840717144</p>
                            </Fade>
                            <Fade bottom>
                                <p>woodheadcreative@gmail.com</p>
                            </Fade>
                        </div>
                        <div className='FooterAddressContainer'>
                            <Fade bottom>
                                <p>OUR ADDRESS</p>
                            </Fade>
                            <Fade bottom>
                                <p>WoodHeadCreative</p>
                            </Fade>
                            <Fade bottom>
                                <p>D125/E, Santhosh Colony, K.K Nagar,Chennai - 600078</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='CopyRightsContainer'>
                    <Fade bottom>
                        <p>All rights are reserved by Woodhead Creative {year}</p>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Footer