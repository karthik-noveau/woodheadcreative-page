import { Button } from '@mui/material'
import React from 'react'
//-----css----
import './footer.css'
//-----icons-----
import {FiInstagram} from 'react-icons/fi'
import {TfiTwitter} from 'react-icons/tfi'
import {FiLinkedin }from 'react-icons/fi'
import {ImFacebook2} from 'react-icons/im'

function Footer() {
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
                <div className='footerAddrContainer'>
                    <div className='footerAddrContainerBox'>
                        <p>   Address : D125/E, Santhosh Colony, K.K Nagar, Chennai - 600078</p>
                        <p>  Phone No: +91-9840717144</p>
                    </div>
                    <div className='footerAddrIconContainer'>
                    <div className='footerAddrIconContainerBox'>
                            <a href='https://www.instagram.com/woodheadcreative_official/'><FiInstagram /></a>
                            <a href='https://twitter.com/WoodheadWhc'><TfiTwitter /></a>
                            <a href='https://www.linkedin.com/company/woodhead-creative/'><FiLinkedin /></a>
                            <a href='https://www.facebook.com/WoodHeadCreative'><ImFacebook2 /></a>




                        </div>
                    </div>
                </div>
                <div className='rightsContainer'>
                    <p>All rights are reserved by Woodhead Creative</p>
                </div>
            </div>
        </div>
    )
}

export default Footer