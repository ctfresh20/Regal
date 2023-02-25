import React from 'react';
import "./Gardening.css";
import $ from 'jquery';
import aa from "./Images/1.jpg";
import ab from "./Images/2.jpeg";
import ac from "./Images/3.jpg";
import ad from "./Images/4.jpg";
import ae from "./Images/5.jpg";
import af from "./Images/6.jpg";
import ag from "./Images/7.jpg";
import ah from "./Images/8.jpg";
import ai from "./Images/9.jpg";
import aj from "./Images/10.jpeg";
import ak from "./Images/11.jpg";
import al from "./Images/12.jpeg";


import {Link} from "react-router-dom";

function Gardening() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-Gardening
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 col-xs-12"> 
    <Link to="/Gardening Descriptions">
         <figure className="snip1577">
  <img src={aa} alt="sample99" />
  <figcaption>
    <h3>Bbq</h3>

  </figcaption>
 
  <a href="#"></a>
</figure>
 </Link>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ab} alt="sample99" />
  <figcaption>
   <h3>Birdcare</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ac} alt="sample99" />
  <figcaption>
   <h3>Camping</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ad} alt="sample99" />
  <figcaption>
   <h3>Fertilisers & Chemicals</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ae} alt="sample99" />
  <figcaption>
   <h3>Furniture</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={af} alt="sample99" />
  <figcaption>
   <h3>Giftware & Ornaments</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ag} alt="sample99" />
  <figcaption>
   <h3>Growing Media</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
  
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ah} alt="sample99" />
  <figcaption>
   <h3>Lightning</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ai} alt="sample99" />
  <figcaption>
   <h3>Planters</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
  
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={aj} alt="sample99" />
  <figcaption>
   <h3>Tools & Accessories</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ak} alt="sample99" />
  <figcaption>
   <h3>Watering</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={al} alt="sample99" />
  <figcaption>
   <h3>Winter Fuels</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
  

    
    </div>

    </div>
  )
}

export default Gardening;
