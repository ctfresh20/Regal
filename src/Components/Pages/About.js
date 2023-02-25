import React from 'react';

import {Link} from "react-router-dom";
import eyn from "./images/eyn.jpg";
function About() {
  return (
    <div className="container-fluid" >
      <div style={{textAlign:"left"}}>
        <Link to="/">Home </Link>
        - About Us
      </div>
      <div className="container-fluid text-center" style={{marginTop:"2%"}}>
        <h4 >About Us
        </h4>
        <hr style={{maxWidth:"400px",marginLeft:"34%"}} />
      </div>
      <div className="container-fluid row">
      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12">
<p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>Welcome to the EFG Housewares trade website. We are proud to say we are the UK’s largest independent trade only wholesale business.  </p>
<p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>EFG have been trading since 1976 from London and many thousands of customers over the years have come to regard us as a trusted part of their business. </p>
      </div>
     <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12">
     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158379.41869295787!2d-0.024054!3d51.665724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x394908b12c809bc6!2sEFG%20Housewares%20Ltd!5e0!3m2!1sen!2sus!4v1674456749009!5m2!1sen!2sus" style={{width:"100%",height:"100%", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
     </div>
     <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" style={{textAlign:"left"}}>
        <p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>  As the UK’s number one Cash and Carry wholesaler, we understand what you require from a UK Wholesale supplier and that is the largest range, at the best prices, every day.
       </p>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
<ul style={{textAlign:"left"}}>
    <p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>Our warehouse opening times are as follows:</p>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Monday:  07:30 - 17:30</li>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Tuesday:  07:30 - 17:30</li>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Wednesday:  07:30 - 17:30</li>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Thursday:  07:30 - 18:30</li>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Friday: 07:30 - 16:30</li>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Saturday:  07:30 - 17:30</li>
    <li style={{ listStyle:"none", fontWeight:"600", color:"black"}}>Sunday:  07:30 - 12:30</li>
    <p  style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>Closed on ALL UK Bank Holidays</p>
    
</ul>
        </div>
     </div>

      </div>
<div className="row">
    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12" style={{textAlign:"left"}}>
  <p  style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>  We are now absolutely delighted to be able to bring the EFG difference to you via a brand-new purpose-built online wholesale website that covers over 50,000 product lines from over a 1000 of the UK’s most trusted brands - available to you 24/7, 365 days a year.
  </p>
  <p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>By opening a trade account with EFG you will not only enjoy a huge product selection, but also a class leading experience from order to delivery and with a dedicated team based in London you can be sure we can assist you every step of the way.</p>
  <p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>Our business has grown over the last 45 years to be one the UK’s most trusted UK wholesale businesses and now not just UK based customers enjoy the difference EFG have hundreds of clients all over the globe to be able to offer a one stop shop.</p>
<p style={{fontSize:"22px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>Let EFG be your wholesale partner, and together we can increase your profit and range!</p>
  </div>
  <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12" style={{textAlign:"left"}}>
<p style={{fontSize:"18px", textAlign:"left", color:"black", fontFace:"myFirstFont"}}>Please note that we do not allow children under the age of 18 in the warehouse under any circumstances and we only allow a maximum of two users per account.</p>
  </div>
</div>
<div className="container-fluid" style={{marginTop:"2%"}}>
    <img src={eyn} className="img-fluid" />
</div>
    </div>
  )
}

export default About;
