import React from 'react'
import Hotel from '../../assets/hotel.jpg'
import Hotel2 from '../../assets/hotel2.jpg'
import Hotel3 from '../../assets/hotel3.jpg'
import Hotel4 from '../../assets/hotel4.jpg'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import './HotelCard.scss'
const HotelCard = () => {
  const image =[
    {
      "img":Hotel
    },
    {
      "img":Hotel2
    },
    {
      "img":Hotel3
    },
    {
      "img":Hotel4
    }
  ]
  return (
    <div className="container mt-5">
     <div className="text mt-3">
      <h2>Türkiye'deki En İyi Oteller</h2>
     </div>
     <div className="row">
      {image.map((img,index)=>{
        return(
          <div className="column" key={index}>
          <div className="card" >
            <img src={img.img} alt="" />
            <button>Detaylı Bilgi <AiOutlineDoubleRight className="my-2 mb-1"/></button>
          </div>
        </div>
      
        )
      })}

</div>
      </div>
 
  )
}

export default HotelCard