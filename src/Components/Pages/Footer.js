import React from 'react';
import "./Footer.css";
import footer from "./images/footer.jpg";
import * as Icons from "react-icons/fa";
import * as Icon from "react-icons/bs";
import safe from "./images/Sagepay.jpg";
import clou from "./images/cloudfy_logo.png";
function Footer() {
  return (
    <div style={{width:"98% d-flex"}}>
    <footer className=" text-lg-start foot text-center" >

  <div className="container p-4">

    <div className="row" classname="contas">
    
      <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
        <h4 className="text-uppercase">CUSTOMER SERVICE</h4>

        <ul className="list-unstyled mb-0" style={{marginTop:"2%"}}>
          <li>
            <a href="#!" className="text-dark">Contact Us</a>
          </li>
          <li>
            <a href="#!" className="text-dark">About Us</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Delivery</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Export</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Blog</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Help/FAQ</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Site Map</a>
          </li>
        </ul>
      </div>
    

    
      <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
        <h4 className="text-uppercase mb-0">WEBSITE</h4>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-dark">Latest News</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Privacy Policy</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Terms & Conditions</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Cookies</a>
          </li>
        </ul>
      </div>
    

    
      <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
        <h4 className="text-uppercase">CONTACT US</h4>

        <ul className="list-unstyled mb-0" style={{marginTop:"2%"}}>
          <li>
            <a href="#!" className="text-dark">29 Mollison Avenue, Brimsdown,Enfield,EN3 7NL</a>
          </li>
          <li>
            <a href="#!" className="text-dark">E : enquiries@efghousewares.co.uk</a>
          </li>
          <li>
            <a href="#!" className="text-dark">T : 02088055756</a>
          </li>
          
        </ul>
      </div>
    

    
      
    
    </div>

  </div>


 
  <div className="container text-center" style={{color:"black", fontWeight:"500"}}>
  STAY UP TO DATE WITH NEW PRODUCTS AND OFFERS BY SIGNING UP FOR OUR NEWSLETTER:
  </div>

        <div className="row d-flex justify-content-center" style={{marginTop:"2%"}}>
       
          <div className="col-auto">
            
          </div>
       

       
          <div className="col-md-5 col-12">
            
            <div className="form-outline mb-4">
              <input type="email" id="form5Example27" className="form-control border rounded" />
              <label className="form-label" for="form5Example27">Email address</label>
            </div>
          </div>
       

       
          <div className="col-auto">
         
            <button type="submit" className="btn btn-primary mb-4">
              Subscribe
            </button>
          </div>
       
        </div>
<div className="row align-items-center" style={{marginTop:"2%", width:"98%"}}>
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6 text-center ">
<h3 style={{fontWeight:"600", color:"black"}}>FOLLOW US</h3>
    </div>
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6 text-center">
<Icons.FaFacebook style={{fontSize:"30px", color:"blue"}}  />&nbsp;
<Icons.FaTwitter style={{fontSize:"30px", color:"skyblue"}} />&nbsp;
<Icons.FaWhatsapp style={{fontSize:"30px", color:"green"}} />

    </div>
</div>
    


 <hr style={{marginTop:"2%"}} />
  
</footer>
@Krishu

</div>
      

  )
}

export default Footer;
