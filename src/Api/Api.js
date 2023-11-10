import axios from "axios";

export const API_ENDPOINT="https://qtify-backend-labs.crio.do"

export const getTopAlbum=async ()=>{
try{
const res = await axios.get(`${API_ENDPOINT}/albums/top`);
return(res.data);
}
catch(e){
    console.error(e)
}
}

export const getNewAlbum=async ()=>{
    try{
    const res = await axios.get(`${API_ENDPOINT}/albums/new`);
    return(res.data);
    }
    catch(e){
        console.error(e)
    }
    }