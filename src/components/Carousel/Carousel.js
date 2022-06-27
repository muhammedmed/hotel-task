import React from 'react'
import { Navigation } from "swiper";
import bg1 from '../../assets/carousel-bg.jpeg'
import bg2 from '../../assets/carousel-bg-2.jpg'
import bg3 from '../../assets/carousel-bg-3.jpg'
import './Carousel.scss'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
const Carousel = () => {
  return (
    <div className="container-fluid mt-5 p-0">
        <h2 className="text-center mb-4">Galeri</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={bg1} alt="" /> <div className="wrapper"><h3 className="text-white mx-3 mt-2">Lorem Ipsum</h3><p className="text-white mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima?</p></div> </SwiperSlide>
        <SwiperSlide><img src={bg2} alt="" /><div className="wrapper"><h3 className="text-white mx-3 mt-2">Lorem Ipsum</h3><p className="text-white mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima?</p></div></SwiperSlide>
        <SwiperSlide><img src={bg3} alt="" /><div className="wrapper"><h3 className="text-white mx-3 mt-2">Lorem Ipsum</h3><p className="text-white mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima?</p></div></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel