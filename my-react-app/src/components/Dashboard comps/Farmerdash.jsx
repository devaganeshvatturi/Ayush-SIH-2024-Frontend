import React,{useEffect} from 'react'
import Filterstartup from './Filterstartup';
import '../styles/Farmerdash.css';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
export default function Doctordash() {
  const params= useLocation();
  let values=new URLSearchParams(params.search);
  let email= values.get('phno');
  let token= values.get('token');
  useEffect(()=>{
    const fecthit = async(e)=>{
        try{
        const response= await axios.post('',phno,token);
        if(response.data.success)
        {

        }
        else{
            settokenvalidation(false);
        }
        }
        catch(error)
        {

        }
        fecthit();

    }
   },[]);
      //    if(tokenvalidation==false){
//     return(<p>Error 404</p>)
//    }
  return (
    <>
    <Header/>
    <p className='farmer-dash-head'>Farmer Dashboard</p>
    <Filterstartup name={'farmer'} email={email}/>
    </>
  )
}
