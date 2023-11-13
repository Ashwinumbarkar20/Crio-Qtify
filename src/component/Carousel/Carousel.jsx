import React from 'react'
import Card from '../Card/Card';
export default function Carousel({topAlbumData,type}) {
    
      var swiper = new Swiper(".mySwiper", {
       
        slidesPerView: 8,
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
      
    </div>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
  </div>
    </>
  )
}
