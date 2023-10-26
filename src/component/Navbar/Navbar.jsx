import React from 'react'
import styles from './Navbar.module.css'
import '../../index.css'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <Logo></Logo>
        <div>Search bar</div>
        <Button buttonName="Give Feedback"></Button>
      </div>
    </div>
  )
}
