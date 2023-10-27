import React from 'react'
import styles from './Card.module.css'
import albumimg from '../../assets/Rectangle 2138.png'
export default function Card() {
  return (
    <>
     <div className={`${styles.mainCard}`}>
        <div className={`${styles.image}`}><img src={albumimg} alt="image" /></div>
        <div className={`${styles.followers}`}><span>100 Follows</span></div>
        <div className={`${styles.title}`}><span>Title of Card</span></div>
     </div> 
    </>
  )
}
