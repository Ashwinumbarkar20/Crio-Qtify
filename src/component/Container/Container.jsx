import React from 'react'
import styles from "./Container.module.css"
import Card from '../Card/Card'
export default function Container({albumData}) {
  return (
    <div >

      <div className={`${styles.containerTitle}`}>
        
        <span>Top Album</span>
        <span>Show All</span>
      </div>

      <div className={`${styles.cards}`}>
<div className='  row'>
{
  albumData.map((a) => (
            <div className={`${styles.carddiv} col-lg-2 col-md-2.5 col-sm-6`} key={Math.random() * 12}>
              <Card albumimg={a.image} Follows={a.follows} title={a.title} />
            </div>
          ))}
</div>
      </div>
    </div>
  )
}
