import React from 'react';
import "./Disposable.css";
import $ from 'jquery';
import aa from "./Images/1.jpg";
import ab from "./Images/2.jpg";



import {Link} from "react-router-dom";

function Disposable() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-Disposable
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 col-xs-12"> 
    <Link to="/Disposable materials">
         <figure className="snip1577">
  <img src={aa} alt="sample99" />
  <figcaption>
    <h3>Bin Bag/Carrier Bag/Pape....</h3>

  </figcaption>
 
  <a href="#"></a>
</figure>
 </Link>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12">      <figure className="snip1577">
  <img src={ab} alt="sample99" />
  <figcaption>
   <h3>Disposable Tableware</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
  

    
    </div>

    </div>
  )
}

export default Disposable;
