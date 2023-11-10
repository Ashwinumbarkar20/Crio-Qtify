import React, { useState } from 'react'
import styles from './Section.module.css'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel';
export default function Section({topAlbumData,title,type}) {
 const[albumtoggler,setAlbumToggler]=useState(false);
 
 const handletoggler=()=>{
   setAlbumToggler(!albumtoggler)
 }
    return (
   <>
   
   <div className={`${styles.section}`}>
    <span className={`${styles.SectionTitle}`}>{title}</span>
    <span onClick={handletoggler}className={`${styles.viewAll}`}>View All</span>
   </div>

   {albumtoggler?
    <div className={`${styles.cards}`}>{
       topAlbumData.map((d)=> {
        return(<Card key={Math.random*11} data={d} type={type}/>)
      })
   } </div>
   :<>
   <Carousel topAlbumData={topAlbumData} type={type}/>

   </>
   }
  
     
  
   </>
  )
}
