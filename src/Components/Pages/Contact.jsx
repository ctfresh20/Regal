import React from 'react';
import {Link } from "react-router-dom";
function Contact() {
  return (
    <div className="container-fluid">
    <p style={{textAlign:"left"}}>
        <Link to="/">Home</Link>- Contact
    </p>
    <div className="container-fluid">
        <h4 style={{color:"black"}}><u style={{marginTop:"7%"}}>Contact Us</u></h4>
    </div>
    <div className="container-fluid" style={{textAlign:"left", marginTop:"5%"}}><p style={{color:"black", fontWeight:"550", fontSize:"17px"}}><font style={{fontWeight:"600", fontSize:"20px"}}>ADDRESS:</font> 29 Mollison Avenue, Brimsdown, Enfield, EN3 7NL</p></div>
    <div className="container-fluid" style={{textAlign:"left"}}><p style={{color:"black", fontWeight:"550", fontSize:"17px"}}><font style={{fontWeight:"600", fontSize:"20px"}}>  EMAIL :</font> enquiries@efghousewares.co.uk</p></div>
  
    <div className="container-fluid" style={{textAlign:"left"}}><p style={{color:"black", fontWeight:"550", fontSize:"17px"}}><font style={{fontWeight:"600", fontSize:"20px"}}>  TELEPHONE:</font> 0208 805 5756  </p></div>
    <div className="container-fluid" style={{marginTop:"5%"}}>
        <h3 style={{color:"black", textAlign:"left", fontWeight:"600"}}>PLEASE COMPLETE THE FORM BELOW</h3>
        <hr style={{marginTop:"2%"}} />
<div className="container-fluid row d-flex justify-content-center">
<div className="col-8 text-center">
        <form >

  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control border" />
    <label className="form-label" for="form4Example1">Name </label>
  </div>

 
  <div className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control  border" />
    <label className="form-label" for="form4Example2">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="phone" id="form4Example2" className="form-control  border" />
    <label className="form-label" for="form4Example2">Phone Number</label>
  </div>


  <div className="form-outline mb-4">
    <textarea className="form-control  border" id="form4Example3" rows="4"></textarea>
    <label className="form-label" for="form4Example3">Message</label>
  </div>


  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4"  />
    <label className="form-check-label" for="form4Example4">
    I accept the Terms and conditions and Privacy policy. 
    </label>
  </div>
<div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{maxWidth:"300px"}}>Send</button>
</div>
</form>
</div>
    </div>
    </div>
    </div>
  
  )
}

export default Contact;
