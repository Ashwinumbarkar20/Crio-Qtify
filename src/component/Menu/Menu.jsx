import Menuitem from '../Menuitem/Menuitem';
import styles from './Menu.module.css'
import React from 'react'

export default function Menu({data}) {
  
    return  (
    <div className={`${styles.menudiv}`}>
    <div className={`${styles.menucontainer}`}>
    {data.map((a) => <Menuitem key={a.id} data={a}/> ) }
    </div>
    </div>
    )
}
