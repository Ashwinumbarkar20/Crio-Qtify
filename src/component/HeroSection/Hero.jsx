import React from 'react'
import styles from './Hero.module.css'
import texts from '../../assets/Group 3738 (1).png'
import headphonelogo from '../../assets/vibrating-headphone 1.png'
export default function Hero() {
  return (
    <>
        <div className={`${styles.hero}`}>
        <div className={`${styles.subsection}`}>

            <img src={texts} alt="text" className={`${styles.texts}`}/>
            <img src={headphonelogo} alt="headphone" className={`${styles.headphonelogo}`}/>
        
        </div>
        </div>
    </>
  )
}
