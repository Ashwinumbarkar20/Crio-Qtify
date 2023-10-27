import React from 'react'
import styles from "./Container.module.css"
import Card from '../Card/Card'
export default function Container({albumData}) {
  return (
    <div>
      <div className={`${styles.containerTitle}`}>
        <span>Top Album</span>
        <span>Show All</span>
      </div>
      <div className={`${styles.cards}`}>

{
    albumData.map((a)=> <Card key={Math.random()*12} albumimg={a.image} Follows={a.follows} title={a.title}/>)
}

      </div>
    </div>
  )
}
