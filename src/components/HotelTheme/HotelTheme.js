import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './HotelTheme.scss'
const HotelTheme = () => {
    const[data,setData] = useState([]);

 
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios("https://otel-temalari.vercel.app/db.json")
            setData(result.data)
          
        }
      fetchData();    
    },[])
    
  return (
    <div className="container mt-5">
        <h2>Temalarına Göre Oteller</h2>
<div className="row">
    {data.map((img)=>{
        return(
            <div className="col-lg-4 column" key={img.id}>
                <img className="img-wrapper" src={img.img} alt="" />
                <div className="text-wrapper"><h5>{img.name}</h5></div>
            </div>
        )
    })}
</div>
    </div>
  )
}

export default HotelTheme