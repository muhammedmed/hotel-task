import {FaUserAlt} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import React,{useState, useEffect} from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.scss'
const Navbar = () => {
    const [show, setShow] = useState(true);
    const[mobile, setMobile] = useState(false);
   
  
    const controlNavbar = () =>{
      if(window.scrollY > 100){
        setShow(true);
      }else{
        setShow(false);
      }
    }
  
    useEffect(()=>{ 
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll",controlNavbar);
  
      
    },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
<div className="container">
    <div className="row d-flex justify-content-between">
   <div className="logo d-flex">
    <img src={Logo} alt="" />
    <div className="dropdown">
  <button className="dropbtn d-flex">Menu <IoMdArrowDropdown className="mt-1 mx-1"/></button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
   </div>
   
    <div className="content">
   
    <ul className={mobile ? "nav-link-mobile" : "nav-link"} onClick={()=>setMobile(false)}>
    <li>
      <a>
        Anasayfa
      </a>
    </li>
    <li>
      <a > 
       Hakkımızda
      </a>
    </li>
    <li>
      <a >
      Oteller
      </a>
    </li>
    <li>
      <a>
      Temalar
      </a>
    </li>
    <li>
      <a>
      İletişim
      </a>
      
    </li>
    <li>
      <a>
      Menu
      </a>
      
    </li>  
  

    <button type="button" className="btn btn-warning mt-2" style={{height:"40px"}}>Giriş Yap <FaUserAlt/></button>
    </ul>

  <button onClick={()=>setMobile(!mobile)} className="hamburger" >
 {mobile ? <AiOutlineClose className="close" size={25}/> : <GiHamburgerMenu className="menu" size={25} />}
  </button>

  </div>

  
  
  </div>
    </div>
    </div>

   

  )
}

export default Navbar