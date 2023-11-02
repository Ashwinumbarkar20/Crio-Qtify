import './App.css'
import Hero from './component/HeroSection/Hero'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card'

import { useEffect, useState } from 'react'
import {getTopAlbum} from "./Api/Api.js"
 
function App() {
const[topAlbumData,setTopAlbumData]=useState([]);   
const getTopAlbumData=async ()=>{
  try{
    const data=await getTopAlbum();
      setTopAlbumData(data)
    }
  catch(e){
    console.log(e);
  }
    
}
  useEffect(()=>{
   getTopAlbumData();
  },[]);

  return (
    <>
   <Navbar></Navbar>
   <Hero/>
   {
       topAlbumData.map((d)=> {
      return(<Card key={Math.random*11} data={d} type="album"/>)
      })
   }
   
    </>
  )
}

export default App
