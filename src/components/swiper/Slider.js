import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//----css----
import './slider.css'
import './scroll.css'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//---icons---
import profile from '../../images/profile.jpg'
//icons
import { GiEarthAmerica } from 'react-icons/gi'
import { FiLinkedin } from 'react-icons/fi'
import { Fade } from "react-reveal";


export default function Slider(props) {


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Navigation]}
        className="SwiperJSContainer"
      >
        {
          props.ImgData.map((item, index) => {
            return (
              <Fade bottom>
                <SwiperSlide>
                  {/* ----images---- */}
                  <img key={index} src={item.test} className="DImg" />
                  <img key={index} src={item.Mtest} className="MImg" />
                  {/* -----text inside the image ---- */}
                  <div className="SliderTextConatainer">
                    <div className="SliderMainTextConatainerBox" >
                      <img src={profile} />
                      <div className="profileData">
                        <p>{item.position} : {item.name}</p>
                        <p>{item.web}</p>
                      </div>
                    </div>
                    <div className="SliderTextConatainerBox" >
                      <p>{item.text1}</p>
                      <p>{item.text2}</p>
                      <p>{item.text3}</p>
                      <p>{item.text4}</p>
                      <p>{item.text5}</p>

                    </div>
                    <div className="SliderIconConatainer" >
                      <a href={item.Linkedin}><GiEarthAmerica /></a>
                      <a href={item.webLink}><FiLinkedin /></a>
                    </div>
                  </div>
                </SwiperSlide>
              </Fade>
            )
          })
        }

      </Swiper>
    </>
  );
}
