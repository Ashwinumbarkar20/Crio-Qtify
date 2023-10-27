import './App.css'
import Hero from './component/HeroSection/Hero'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card'
import Container from './component/Container/Container'
import { useEffect, useState } from 'react'
 

function App() {
  const[albumData,setalbumData]=useState([]);   

const getAlbum=async ()=>{
  let data=await fetch("https://qtify-backend-labs.crio.do/albums/top");
  let album=await data.json();
  setalbumData(album);
  
}

  useEffect(()=>{
    getAlbum();
  },[]);

  return (
    <>
   <Navbar></Navbar>
   <Hero/>
    <Container albumData={albumData} />
    </>
  )
}

export default App
