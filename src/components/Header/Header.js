import React from 'react'
import './Header.scss'
import {BsArrowRight, BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <div className="header">
   <div className="container">
    <div className="row">
  
   <div className="form-group has-search mt-3">
    <span className="fa fa-search form-control-feedback"><BsSearch/></span>
    <input type="text" className="form-control" placeholder="Arama Yapın..."/>
  </div>
  <div className="date d-flex justify-content-center align-items-center">
  <input type="date" />
  <input type="date" />
  </div>
  <div className="person">
    <select name="" id="">
      <option value="1">1 Kişi</option>
      <option value="1">2 Kişi</option>
      <option value="1">3 Kişi</option>
      <option value="1">4 Kişi</option>
      <option value="1">5 Kişi</option>
    </select>
  </div>
  <div className="search-button">
    <button className="search-btn">Arama Yap <BsArrowRight/></button>
  </div>
   </div>
    </div>

    </div>
  )
}

export default Header