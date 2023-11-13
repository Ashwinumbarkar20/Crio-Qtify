import React, { useState } from 'react'
import styles from './Filter.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Filtertabs from '../Filtertabs/Filtertabs';

export default function Filter({data,Genre,title}) {
  const Allgenre=Genre.map((g)=>{return(g.label)})
  const[value,setValue]=useState(0);
  const filtered=data.filter((song) => song)
  console.log("All genre ",Allgenre)
  const handleChange=(e,newvalue)=>{
    console.log(e)
        setValue(newvalue)
    }
  
    return (
    <>
       <div className={`${styles.filterSection}`}>
       <div className={`${styles.filterSectionTitle}`}>{title}</div>

       <Tabs value={value} onChange={handleChange} aria-label="Songs Genre">
       <Tab className ={`${styles.Tabs}`} key={"All"} label="All"/>       
        {
            Allgenre.map((genre)=>{return(  
                 <Tab className ={`${styles.Tabs}`} key={genre} label={genre}/>
            )})
        }
        </Tabs>
          {
            value===0
            ?
            <Filtertabs Data={data} type={"songs"}/>
            : 
            <Filtertabs
            Data={data.filter((song) => song.genre.label=== Allgenre[value - 1])}
            type={"songs"}
          />    
           }
            
            
          
        
        
        
       </div>
    </>
  )
}
