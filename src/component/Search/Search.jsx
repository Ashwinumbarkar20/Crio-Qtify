import React from 'react'
import styles from './Search.module.css'

//import { ReactComponent as Searchicon } from '../../assets/Search icon.svg'
import Searchicon1 from '../../assets/Search icon.png'  ;
 
export default function Search() {
  return (
    <>
        <form className={`${styles.wrapper}`}>
            <input type="text" className={`${styles.search}`}  placeholder='Search a album of your choice' />
            <button className={`${styles.btn}`}> 
            <img src={Searchicon1} alt=" Search icon" className={`${styles.slogo}`}/>
            </button>
        </form>
    </>
  )
}
