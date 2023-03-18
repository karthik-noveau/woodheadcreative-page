import React from 'react'
import Navbar from '../navbar/Navbar';
import data from '../data/ServiceData'
import ImgData from '../data/ImgData'
import Fade from 'react-reveal/Fade';
//------img------
import HBanner from '../../images/HBanner.gif'
import MHBanner from '../../images/MHBanner.gif'
import DSImg from '../../images/DSImg.jpg'
import MDSImg from '../../images/MDSImg.jpg'
import DBImg from '../../images/DBImg.jpg'
import MDBImg from '../../images/MDBImg.jpg'
import growth from '../../images/growth.jpg'
import mgrowth from '../../images/mgrowth.jpg'
import transformational from '../../images/transformational.jpg'
import Mtransformational from '../../images/Mtransformational.jpg'
import client1 from '../../images/client1.jpg'
import client2 from '../../images/client2.jpg'
import Mclient1 from '../../images/Mclient1.jpg'
import collab from '../../images/collab.jpg'
import Mcollab from '../../images/Mcollab.jpg'
import offer from '../../images/offer.jpg'
import Moffer from '../../images/Moffer.jpg'
//------pdf-----
import pdf from '../../images/pdf/WHC_Deck.pdf'
//------css------
import './home.css'
import './scroll.css'
//------MUI------
import Button from '@mui/material/Button';
import Slider from '../swiper/Slider';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from '../footer/Footer';



function Home() {
    return (
        <div id="home">
            <div className='stickyNavbar'>
                <Navbar />
            </div>


            <section className='secondNavContainer' >
                <div className='secondNavContainerBox'>
                    <marquee direction="left" className='secondNavContainerBox1'>
                        Does your business need more leads or better branding? Avail our offer.
                    </marquee>
                    <div className='secondNavContainerBox2'>
                        <Fade bottom>
                            <a href="#test"> <Button variant="contained" style={{ backgroundColor: " #b37402" }}>CLICK HERE</Button></a>
                        </Fade>
                    </div>
                </div>
            </section>

            <section className='HomeHolder'>
                <div className='HomeImgContainer HomeBannerImgContainer' >
                    <Fade bottom>
                        <img src={HBanner} />
                        <img src={MHBanner} />
                    </Fade>
                </div>
                <div className='section1Container'>
                    <Fade bottom>
                        <img src={DSImg} />
                        <img src={MDSImg} />
                    </Fade>
                </div>
                <div className='section2Container'>
                    <img src={DBImg} />
                    <img src={MDBImg} />
                    <div className='section2ContainerBox'>
                        <Fade bottom>
                            <h1 className='title'>DIGITAL STORYTELLING AND BEYOND</h1>
                        </Fade>
                        <div className='textContainer'>
                            <Fade bottom>
                                <p className='text1'>"Nothing sticks in your head better than a story."</p>
                            </Fade>
                            <Fade bottom>
                                <p className='text2'>We are storytellers who write, design, develop, and market your BRAND story to your target
                                    audience.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='section2Container section2Container11 section2Container22'>
                    <img src={growth} />
                    <img src={mgrowth} />
                    <div className='section2ContainerBox section2ContainerBox11'>
                        <Fade bottom>
                            <h3 className='title'>WE BELIEVE IN THE POWER OF TRANSFORMATION</h3>
                        </Fade>

                        <div className='textContainer'>
                            <Fade bottom>
                                <p className='text1'>"Our Mission is to digitally transform your business 10X through effective storytelling."</p>
                            </Fade>
                            <Fade bottom>
                                <p className='text2'>We help
                                    you build your brand, acquire and retain customers in various industries across geographies.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='MainTitleContainer'>
                    <Fade bottom>
                        <h3>TRANSFORMATIONAL CLIENT PROCESS</h3>
                    </Fade>
                </div>
                <div className='HomeImgContainer'>
                    <img src={transformational} />
                    <img src={Mtransformational} />
                </div>
                <div className='MainTitleContainer' id="services">
                    <Fade bottom>
                        <h3>SERVICES</h3>
                    </Fade>
                </div>
                <div className='serviceContainer'>
                    <div className='serviceContainerBox'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='serviceContainerBoxItem'>
                                        <img src={item.img} />
                                        <Fade bottom>
                                            <p className='headingText'>{item.title}</p>
                                        </Fade>

                                        <div className='textContainer'>
                                            <Fade bottom>
                                                <p>{item.text1}</p>
                                            </Fade>
                                            <Fade bottom>
                                                <p>{item.text2}</p>
                                            </Fade>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
                <span id="clients"></span>
                <div className='MainTitleContainer' >
                    <Fade bottom>
                        <h3>CLIENTS</h3>
                    </Fade>
                </div>
                <div className='clientImgContanier' >
                    <div className='clientImgContanierBox' >
                        <img src={client1} />
                        <img src={client2} />
                    </div>
                    <img className="clientImgContanierBoxMImg" src={Mclient1} />
                </div>

                <div className='MainTitleContainer'>
                    <Fade bottom>
                        <h3>OUR COLLABORATIVE PARTNERS</h3>
                    </Fade>
                </div>
                <div className='HomeImgContainer' >
                    <Fade bottom>
                        <img src={collab} />
                        <img src={Mcollab} />
                    </Fade>
                </div>
                <div className='HomeImgContainer offerWithButtonContainer' id="offer" >
                    <img src={offer} />
                    <img src={Moffer} />
                    <Fade bottom>
                        <a href='#contact'>  <Button style={{ backgroundColor: "#35637a" }}>CONTACT US</Button></a>
                    </Fade>
                </div>
                <section className='secondNavDownContainer'>
                    <div className='secondNavDownContainerBox'>
                        <marquee direction="left" className='secondNavDownContainerBox1'>
                            Know more about our collective here....
                        </marquee>
                        <div className='secondNavDownContainerBox2' id="test">
                            <Fade bottom>
                                <a href="https://firebasestorage.googleapis.com/v0/b/woodheadcreative-c81ba.appspot.com/o/WHC_Deck.pdf?alt=media&token=601b995b-2b02-48a9-9e85-e72115300913" download > <Button variant="contained" style={{ backgroundColor: " #b37402" }}>DOWNLOAD</Button></a>
                            </Fade>
                        </div>
                    </div>
                </section>
                <div className='MainTitleContainer'>
                    <Fade bottom>
                        <h3>TESTIMONIAL SECTION</h3>
                    </Fade>
                </div>

            </section >
            <Slider ImgData={ImgData} />
            <span id="contact" >
                <Footer />
            </span>

        </div >
    )
}

export default Home