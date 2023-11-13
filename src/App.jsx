import './App.css'
import Hero from './component/HeroSection/Hero'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card'
import { useEffect, useState } from 'react'
import {getTopAlbum,getNewAlbum,getSongs,getGenre} from "./Api/Api.js"
import Section from './component/Section/Section.jsx'
import Filter from './component/Filtersection/Filter.jsx'
 
function App() {
const[topAlbumData,setTopAlbumData]=useState([]);   
const[newAlbumData,setNewAlbumData]=useState([]); 
const[songsData,setSongsData]=useState([]);
const[Genre,setGenre]=useState([]);
const getTopAlbumData=async ()=>{
  try{
    const data=await getTopAlbum();
      setTopAlbumData(data)
    }
  catch(e){
    console.log(e);
  }
    
}

const getNewAlbumData=async ()=>{
  try{
    const data=await getNewAlbum();
      setNewAlbumData(data)
     
    }
  catch(e){
    console.log(e);
  }
    
}

const getSongsData=async()=>{
    try{
    const data=await getSongs();
       setSongsData(data)
    }
  catch(e){
    console.log(e);
  }
}

const getGenreData =async()=>{
  try{
const res =await getGenre();
setGenre(res.data);
console.log(Genre)
  }
  catch(e){
    console.log(e)
  }
}

  useEffect(()=>{
   getTopAlbumData();
   getNewAlbumData();
   getSongsData();
   getGenreData();
  },[]);

  return (
    <>
   <Navbar></Navbar>
   <Hero/>
   <Section Data={topAlbumData} title={"Top Album"} type={"album"}/>
   <Section Data={newAlbumData} title={"New Album"} type={"album"}/>
    {/* <Section topAlbumData={topAlbumData}/> */}
    <Filter data={songsData} Genre={Genre} title="Songs"></Filter>
    {/* <Section Data={songsData} title={"Songs"} type={"songs"}/> */}
    </>
  )
}

export default App
