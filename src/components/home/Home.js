import React from 'react'
import Navbar from '../navbar/Navbar';
import data from './ServiceData'
//------css------
import './home.css'
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
//-----testimonials-----
import test1 from '../../images/testimonials/test1.jpg'
//------MUI------
import Button from '@mui/material/Button';
import Slider from '../slider/Slider';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";




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
            <section className='HomeHolder'>
                <div className='HomeImgContainer' >
                    <img src={HBanner} />
                    <img src={MHBanner} />
                </div>
                <div className='section1Container'>
                    <img src={DSImg} />
                    <img src={MDSImg} />
                </div>
                <div className='section2Container'>
                    <img src={DBImg} />
                    <img src={MDBImg} />
                    <div className='section2ContainerBox'>
                        <h1 className='title'>DIGITAL STORYTELLING AND BEYOND</h1>
                        <div className='textContainer'>
                            <p className='text1'>"Nothing sticks in your head better than a story."</p>
                            <p className='text2'>We are storytellers who write, design, develop, and market your BRAND story to your target
                                audience.</p>
                        </div>
                    </div>
                </div>
                <div className='section2Container section2Container11 section2Container22'>
                    <img src={growth} />
                    <img src={mgrowth} />
                    <div className='section2ContainerBox section2ContainerBox11'>
                        <h3 className='title'>WE BELIEVE IN THE POWER OF TRANSFORMATION</h3>
                        <div className='textContainer'>
                            <p className='text1'>"Our Mission is to digitally transform your business 10X through effective storytelling."</p>
                            <p className='text2'>We help
                                you build your brand, acquire and retain customers in various industries across geographies.</p>
                        </div>
                    </div>
                </div>
                <div className='MainTitleContainer'>
                    <h3>TRANSFORMATIONAL CLIENT PROCESS</h3>
                </div>
                <div className='HomeImgContainer' >
                    <img src={transformational} />
                    <img src={Mtransformational} />
                </div>
                <div className='MainTitleContainer'>
                    <h3>SERVICES</h3>
                </div>
                <div className='serviceContainer'>
                    <div className='serviceContainerBox'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='serviceContainerBoxItem'>
                                        <img src={item.img} />

                                        <p className='headingText'>{item.title}</p>
                                        <div className='textContainer'>
                                            <p>{item.text1}</p>
                                            <p>{item.text2}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
                <div className='MainTitleContainer'>
                    <h3>CLIENTS</h3>
                </div>
                <div className='clientImgContanier' >
                    <div className='clientImgContanierBox' >
                        <img src={client1} />
                        <img src={client2} />
                    </div>
                    <img className="clientImgContanierBoxMImg" src={Mclient1} />
                </div>

                <div className='MainTitleContainer'>
                    <h3>OUR COLLABORATIVE PARTNERS</h3>
                </div>
                <div className='HomeImgContainer' >
                    <img src={transformational} />
                    <img src={Mtransformational} />
                </div>
                <div className='HomeImgContainer' >
                    <img src={offer} />
                    <img src={offer} />
                </div>
                <div className='MainTitleContainer'>
                    <h3>TESTIMONIAL SECTION</h3>
                </div>
                <div className='SwiperJSContainer'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="sliderImage" src={test1}/></SwiperSlide>
               
            </Swiper>
        </div>
            </section>
        </div>
    )
}

export default Home