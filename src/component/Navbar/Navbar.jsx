import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav} button`}>
        <div>Logo</div>
        <div>Search bar</div>
        <div>Sharefeedback</div>
      </div>
    </div>
  )
}
