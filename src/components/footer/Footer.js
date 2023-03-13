import { Button } from '@mui/material'
import React from 'react'
//-----css----
import './footer.css'

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
                        <p>   Address : D125/E, Santhosh Colony, K.K Nagar, Chennai - 60078</p>
                        <p>  Phone No: 9840717144</p>
                    </div>
                </div>
                <div className='rightsContainer'>
                    <p>All rights are reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer