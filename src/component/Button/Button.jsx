import React from 'react'
import styles from './Button.module.css'
export default function Button({buttonName}) {
  return (
    <>
    <button className={`${styles.feedbackbtn}`}>{buttonName}</button>
    </>
  )
}
