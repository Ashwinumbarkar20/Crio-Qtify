import React from 'react'
import styles from './FAQ.module.css' 
import Accordian from '../Accordian/Accordian'

export default function FAQ() {
  return (
    <>
        <div className={`${styles.mainFAQ}`}>
            <h2> FAQ's</h2>
            <Accordian title="Is QTify free to use?" data="Yes! It is 100% free, and has 0% ads!"/>
            <Accordian title="Can I download and listen to songs offline?" data="Sorry, unfortunately we don't provide the service to download any songs."/>   
        </div>
    </>
  )
}
