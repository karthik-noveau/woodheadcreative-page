import React from 'react'
import Navbar from '../navbar/Navbar';
//------css------
import './home.css'
//------img------
import HBanner from '../../images/HBanner.jpg'
import MHBanner from '../../images/MHBanner.jpg'
import HBanner1 from '../../images/HBanner1.jpg'
import MHBanner1 from '../../images/MHBanner1.jpg'
import HBanner2 from '../../images/HBanner2.jpg'
import MHBanner2 from '../../images/MHBanner2.jpg'
import HBanner3 from '../../images/HBanner3.jpg'
import MHBanner3 from '../../images/MHBanner3.jpg'
import client1 from '../../images/client1.jpg'
import client2 from '../../images/client2.jpg'
import MClient from '../../images/MClient.jpg'
import CollClient from '../../images/CollClient.jpg'
import MCollClient from '../../images/MCollClient.jpg'
//------MUI------
import Button from '@mui/material/Button';

function Home() {
    return (
        <div>
            <Navbar />
            <section className='secondNavContainer'>
                <div className='secondNavContainerBox'>
                    <marquee direction="right" className='secondNavContainerBox1'>
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                    </marquee>
                    <div className='secondNavContainerBox2'>
                        <Button variant="contained" style={{ backgroundColor: " #b37402" }}>CLICK HERE</Button>
                    </div>
                </div>
            </section>
            <div className='HomeHolder'>
                <div className='HomeHolderContainer'>

                    <section className='homeBannerContainer homeBannerContainerMain homeBannerContainerMain77'>
                        <img src={HBanner} />
                        <img src={MHBanner} />
                    </section>

                    <section className='homeBannerContainer homeBannerContainer11'>
                        <img src={HBanner1} />
                        <img src={MHBanner1} />
                        <h1 className='headingText headingText11'>Digital Storytelling and Beyond</h1>
                        <div className='homeBannerContainerText1'>

                            <p>Nothing sticks in your head better than a story.</p>
                            <p>We are storytellers who write, design, develop, and market your BRAND story to your target audience.</p>
                        </div>
                    </section>
                    <section className='homeBannerContainer homeBannerContainer11 homeBannerContainer22'>
                        <img src={HBanner2} />
                        <img src={MHBanner2} />
                        <div className='headingText headingText11 headingText22'>Digital Storytelling and Beyond</div>
                        <div className='homeBannerContainerText1 homeBannerContainerText122'>

                            <p>Nothing sticks in your head better than a story.</p>
                            <p>We are storytellers who write, design, develop, and market your BRAND story to your target audience.</p>
                        </div>
                    </section>
                    <section className='homeBannerContainer homeBannerContainerMain'>
                        <img src={HBanner3} />
                        <img src={MHBanner3} />
                    </section>
                </div>
            </div>
            <section className='servicesContainer'>
                <div className='headingText headingText33'>SERVICES</div>
                <div className='servicesContainerBox'>

                </div>
            </section>
            <div className='headingText headingText44'>Clients</div>
            <section className='homeBannerContainer homeBannerContainerMain homeBannerContainerMainClient'>
                <img src={client1} />
                <img src={client2} />
                <img src={MClient} />
            </section>
            <div className='headingText headingText44 headingText55'>Collaborative patner</div>
            <section className='homeBannerContainer homeBannerContainerMain homeBannerContainerMainClient homeBannerContainerMainColl'>
                <img src={CollClient} />
                <img src={MCollClient} />
            </section>

        </div>
    )
}

export default Home