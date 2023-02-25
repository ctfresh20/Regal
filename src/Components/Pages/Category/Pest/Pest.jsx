import React from 'react';
import "./Pest.css";
import $ from 'jquery';
import aa from "./Images/1.jpg";
import ab from "./Images/2.jpg";
import ac from "./Images/3.jpg";


import {Link} from "react-router-dom";

function Pest() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-Pest
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 col-xs-12"> 
    <Link to="/Pest Material">
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
    </div>   
  

    
    </div>

    </div>
  )
}

export default Pest;
