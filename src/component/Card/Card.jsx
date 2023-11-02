import React from 'react'
import styles from './Card.module.css'
import Chip from '@mui/material/Chip'
import { Tooltip } from '@mui/material';

export default function Card({data,type}) {
  const {image,follows,title,songs}=data;
  
  const getCard=(type)=>
   {
    switch(type){
    case "album":
        {
          return(
  <Tooltip title={`${songs.length} Songs`} placement="top">
  <div className={`${styles.mainDiv}`}>
  <div className={`${styles.cardDiv}`}>
      <div className={`${styles.imgDiv}`} ><img src={image} alt={title} /></div>
      <div className={`${styles.chipDiv}`}><Chip label={`Follow ${follows}`} className={`${styles.chipcomponent}`} /></div>
  </div>
  <div className={`${styles.title}`}>
    <p>{title}</p>
  </div>
  </div>
  </Tooltip>
          )
        }
default : return <></>
}
  }  
  return  getCard(type)
}
