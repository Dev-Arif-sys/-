import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React,{Component} from 'react';
import Slider from "react-slick";
import './MySlider.css'

const MySlider = (props) => {
  const {img1,img2,img3}=props.images

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,  
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
    }
    return (
        <div className='slider'>
        
        <Slider {...settings}>
          <div className='img'>
          <img src={img1} className='slider-img'/>
          </div>
          <div className='img'>
          <img src={img2} className='slider-img' />
          </div>
          <div className='img'>
          <img src={img3} className='slider-img' />
          </div>
          
        </Slider>
      </div>
    );
};

export default MySlider;