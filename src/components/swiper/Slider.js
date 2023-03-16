import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.css'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider(props) {
  const imgObj = Object.values(props.ImgData[0].img)
  // let testArr = []
  // let MTestArr = []
  // for (let i = 0; i < imgObj.length; i++) {

  //   testArr.push(imgObj[i].test)
  //   MTestArr.push(imgObj[i].Mtest)
  // }

  console.log(
    imgObj.map((item, index) =>{
       return imgObj[index].test
    })
  )

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[  Pagination, Navigation]}
        className="SwiperJSContainer"
      >
        {
          imgObj.map((item, index) => {
            return (
              <SwiperSlide>
                <img key={index} src={imgObj[index].test} className="DImg" />
                <img key={index} src={imgObj[index].Mtest} className="MImg" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
