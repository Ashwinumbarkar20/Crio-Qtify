import React from 'react'
import styles from './Card.module.css'

export default function Card({albumimg,Follows,title}) {
  
  return (
    
    <>
    
     <div className={`${styles.mainCard}`}>
        <div className={`${styles.image}`}><img src={albumimg} alt="image" /></div>
        <div className={`${styles.followers}`}><span>{Follows} Follows</span></div>
        <div className={`${styles.title}`}><span>{title}</span></div>
     </div> 
    </>
  )
}
