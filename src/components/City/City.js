import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './City.scss'
const City = () => {
    const[data,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios("https://en-cok-tercih-edilen-oteller.vercel.app/db.json")
            setData(result.data)
        }
        fetchData();
     
    },[])

  return (
    <div className="container mt-5">
        <div className="text">
       <h2> Türkiye'de En Çok Tercih Edilen Şehirler</h2>
       </div>
   
       <div className="first__column">
        <div className="col-lg-8  col-left">  <img src={data?.[0]?.img} alt=""    /> <div className="text-wrapper"><h2>{data?.[0]?.name}</h2></div></div>
        <div className="col-lg-4  col-right">  <img src={data?.[1]?.img} alt=""   /><div className="text-wrapper"><h2>{data?.[1]?.name}</h2></div></div>
       </div>
       <div className="second__column">
       <div className="col-lg-4 col-left"><img src={data?.[2]?.img} alt=""    /> <div className="text-wrapper"><h2>{data?.[2]?.name}</h2></div></div>
       <div className="col-lg-4 col-mid"><img src={data?.[3]?.img} alt=""    /><div className="text-wrapper"><h2>{data?.[3]?.name}</h2></div></div>
       <div className="col-lg-4 col-right"><img src={data?.[4]?.img} alt=""    /><div className="text-wrapper"><h2>{data?.[4]?.name}</h2></div></div>
       </div>
       <div className="third__column">
        <div className="col-lg-4 col-right">  <img src={data?.[5]?.img} alt=""    /><div className="text-wrapper"><h2>{data?.[5]?.name}</h2></div></div>
        <div className="col-lg-8 col-left">  <img src={data?.[6]?.img} alt=""   /><div className="text-wrapper"><h2>{data?.[6]?.name}</h2></div></div>
       </div>
      
    </div>
  )
}

export default City