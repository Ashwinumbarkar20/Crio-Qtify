import React, { useState } from 'react'
import styles from './Section.module.css'
import Card from '../Card/Card'
export default function Section({topAlbumData,title,type}) {
 const[toggler,setToggler]=useState(false);
 
 const handletoggler=()=>{
setToggler(!toggler)
 }
    return (
   <>
   
   <div className={`${styles.section}`}>
    <span className={`${styles.SectionTitle}`}>{title}</span>
    <span onClick={handletoggler}className={`${styles.viewAll}`}>View All</span>
   </div>
   
   {toggler?
    <div className={`${styles.cards}`}>{
       topAlbumData.map((d)=> {
        return(<Card key={Math.random*11} data={d} type={type}/>)
      })
   } </div>
   :<>Corosol</>
   }
  
     
  
   </>
  )
}
