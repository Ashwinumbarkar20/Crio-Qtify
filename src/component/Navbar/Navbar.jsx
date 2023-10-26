import React from 'react'
import styles from './Navbar.module.css'
import '../../index.css'
import Button from '../Button/Button'
export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div>Logo</div>
        <div>Search bar</div>
        <Button buttonName="Give Feedback"></Button>
      </div>
    </div>
  )
}
