import React from 'react';
import "./China.css";
import $ from 'jquery';
import aa from "./Images/1.jpeg";
import ab from "./Images/2.jpg";
import ac from "./Images/3.jpg";
import ad from "./Images/4.jpg";
import ae from "./Images/5.jpg";
import af from "./Images/6.jpg";
import ag from "./Images/7.jpeg";

import {Link} from "react-router-dom";

function China() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-China
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12"> 
    <Link to="/China Descriptions">
         <figure className="snip1577">
  <img src={aa} alt="sample99" />
  <figcaption>
    <h3>Cookware</h3>

  </figcaption>
 
  <a href="#"></a>
</figure>
 </Link>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ab} alt="sample99" />
  <figcaption>
   <h3>Crockery</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ac} alt="sample99" />
  <figcaption>
    <h3>Dinner Sets</h3>
   
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ad} alt="sample99" />
  <figcaption>
    <h3>Drinking Glasses</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ae} alt="sample99" />
  <figcaption>
    <h3>Home Baking</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={af} alt="sample99" />
  <figcaption>
    <h3>Mugs & Cups & Saucers</h3>
  
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ag} alt="sample99" />
  <figcaption>
    <h3>Storage & Accesseroies</h3>
  
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    
    </div>

    </div>
  )
}

export default China;
