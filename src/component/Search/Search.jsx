import React, { useState } from 'react'
import styles from './Search.module.css'
import Menu from '../Menu/Menu';

//import { ReactComponent as Searchicon } from '../../assets/Search icon.svg'
import Searchicon1 from '../../assets/Search icon.png'  ;
 
export default function Search({data}) {
  const[search,setSearch]=useState(null);
  const handleChange=(e)=>{
    setSearch(e.target.value)
    
   }
  return (
    <>
    <div className={`${styles.maindiv}`}>
        <form className={`${styles.wrapper}`}>
            <input type="text" className={`${styles.search}`} value={search} onChange={handleChange} placeholder='Search a album of your choice' />
            <button className={`${styles.btn}`}> 
            <img src={Searchicon1} alt=" Search icon" className={`${styles.slogo}`}/>
            </button>
        </form>
        {search&&<Menu data={data}></Menu>}
        </div>
    </>
  )
}
