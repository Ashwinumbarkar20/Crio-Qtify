import React from 'react'
import Carousel from '../Carousel/Carousel';
import styles from './Filtertabs.module.css'

export default function Filtertabs({Data,type}) {
  {console.log("in FIlter Tabs componenet")}
     return (
   <>
   <div className={`${styles.Carousel}`}><Carousel topAlbumData={Data} type={type}/></div>
   
   </>
  )
}
