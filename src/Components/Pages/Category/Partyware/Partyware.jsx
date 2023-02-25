import React from 'react';
import "./Partyware.css";
import $ from 'jquery';
import aa from "./Images/1.jpeg";
import ab from "./Images/2.jpeg";
import ac from "./Images/3.jpg";
import ad from "./Images/4.jpeg";
import ae from "./Images/5.jpeg";
import af from "./Images/6.jpg";
import ag from "./Images/7.jpg";
import ah from "./Images/8.jpg";
import ai from "./Images/9.jpg";


import {Link} from "react-router-dom";

function Partyware() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-Partyware
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 col-xs-12"> 
    <Link to="/Partyware Description">
         <figure className="snip1577">
  <img src={aa} alt="sample99" />
  <figcaption>
    <h3>Buddhas Elephants & Pin...</h3>

  </figcaption>
 
  <a href="#"></a>
</figure>
 </Link>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ab} alt="sample99" />
  <figcaption>
   <h3>Charger Plates</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ac} alt="sample99" />
  <figcaption>
   <h3>Gift for Ladies</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ad} alt="sample99" />
  <figcaption>
   <h3>Gift for Men & Boys</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ae} alt="sample99" />
  <figcaption>
   <h3>Home Living</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={af} alt="sample99" />
  <figcaption>
   <h3>London Souvenir</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ag} alt="sample99" />
  <figcaption>
   <h3>Memorial & Cherubs</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
  
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ah} alt="sample99" />
  <figcaption>
   <h3>Mother's day</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ai} alt="sample99" />
  <figcaption>
   <h3>St George/England Party</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>

  

    
    </div>

    </div>
  )
}

export default Partyware;
