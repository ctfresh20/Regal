import React from 'react';
import "./Cleaning.css";
import $ from 'jquery';
import aa from "./Images/1.jpg";
import ab from "./Images/2.jpg";
import ac from "./Images/3.jpg";
import ad from "./Images/4.jpg";
import ae from "./Images/5.jpg";


import {Link} from "react-router-dom";

function Cleaning() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-Cleaning
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4col-sm-12 col-12 col-xs-12"> 
    <Link to="/Cleaning Descriptions">
         <figure className="snip1577">
  <img src={aa} alt="sample99" />
  <figcaption>
    <h3>Brushware</h3>

  </figcaption>
 
  <a href="#"></a>
</figure>
 </Link>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ab} alt="sample99" />
  <figcaption>
   <h3>Cloths And Dusters</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ac} alt="sample99" />
  <figcaption>
    <h3>Gloves</h3>
   
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ad} alt="sample99" />
  <figcaption>
    <h3>Mops/ Squeegees</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ae} alt="sample99" />
  <figcaption>
    <h3>Sponge Scourer</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>

    
    </div>

    </div>
  )
}

export default Cleaning;
