import React from 'react'
import styles from './Menuitem.module.css'
export default function Menuitem({data}) {
  return (
    <>
        <div className={`${styles.mainitemdiv}`}>
            <div className={`${styles.content}`}>
              <div className={`${styles.aimage}`}><img src={data.image} alt={data.title} />
              </div>
               
               <p className={`${styles.title}`}>{data.title}</p>
               
            </div>
            <div className={`${styles.totalSongs}`} ><p>{`${data.songs.length} Songs`}</p> </div>
            
        </div>
    </>
  )
}
