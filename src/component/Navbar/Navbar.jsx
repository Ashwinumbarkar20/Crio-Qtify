import React from 'react'
import styles from './Navbar.module.css'
import '../../index.css'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
export default function Navbar({data}) {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <Logo></Logo>
        <Search data={data}/>
        <Button buttonName="Give Feedback"></Button>
      </div>
    </div>
  )
}
