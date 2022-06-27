import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
       <div className="container p-4">
       <section className="mb-4">
       <button
        ><FaFacebook size={35}/></button>
          <button
        ><FaFacebook size={35}/></button>
          <button
        ><FaFacebook size={35}/></button>
       </section>
       <div className="line">
       </div>
 
      <div className="row">
    
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="mt-3">Lorem Ipsum</h5>

        
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className=" mt-3">Lorem Ipsum</h5>

        
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className=" mt-3">Lorem Ipsum</h5>

        
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className=" mt-3">Lorem Ipsum</h5>

        
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className=" mt-3">Lorem Ipsum</h5>

        
        </div>
        </div>
  
        </div> 
 
         <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copy">
                <h3> © 2022 Copyright Lorem Ipsum Tüm Hakları saklıdır.</h3>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
             <div className="row justify-content-end">
          
            <div className="col-lg-4">Lorem Ipsum</div>
              <div className="col-lg-4">Lorem Ipsum</div>
              <div className="col-lg-4">Lorem Ipsum</div>
            </div>
             </div>
            </div>
          </div>
       
     
</footer>
  )
}

export default Footer