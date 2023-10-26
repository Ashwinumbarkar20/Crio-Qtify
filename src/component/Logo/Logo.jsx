import React from 'react'
import styles from './Logo.module.css'
import logoimg from '../../assets/QtifyLogo.png'
export default function Logo() {
  return (
    <>
       <a><img src={logoimg} className={`${styles.logo}`} alt="logo" /></a> 
    </>
  )
}
