import React from 'react'
import Card from '../Card/Card';
export default function Carousel({topAlbumData,type}) {
    
      var swiper = new Swiper(".mySwiper", {
       
        slidesPerView: 6,
        spaceBetween: 10,
        speed:500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
  return (
    <>
         <div className="swiper mySwiper">
    <div className="swiper-wrapper">
    {
      topAlbumData.map((d)=>{return(
        <div className="swiper-slide" key={Math.random*11}>
        <Card data={d} type={type}/>
        </div>

      )})
    }
      {/* <div className="swiper-slide">Slide 1</div>
      <div className="swiper-slide">Slide 2</div>
      <div className="swiper-slide">Slide 3</div>
      <div className="swiper-slide">Slide 4</div>
      <div className="swiper-slide">Slide 5</div>
      <div className="swiper-slide">Slide 6</div>
      <div className="swiper-slide">Slide 7</div>
      <div className="swiper-slide">Slide 8</div>
      <div className="swiper-slide">Slide 9</div> */}
    </div>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
  </div>
    </>
  )
}
