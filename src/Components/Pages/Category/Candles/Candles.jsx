import React from 'react';
import "./Candles.css";
import $ from 'jquery';
import aa from "./Images/1.jpeg";
import ab from "./Images/2.jpg";
import ac from "./Images/3.jpg";
import ad from "./Images/4.jpg";
import ae from "./Images/5.jpeg";
import af from "./Images/6.jpg";
import ag from "./Images/7.jpg";
import ah from "./Images/8.jpeg";
import ai from "./Images/9.jpg";
import aj from "./Images/10.jpeg";
import ak from "./Images/11.jpg";
import {Link} from "react-router-dom";

function Candles() {
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
  return (
    <div className='container-fluid'>
    <div className="container-fluid pt-4" style={{textAlign:"left"}}>
<Link to="/">Home</Link>- <Link to="/Departments">Departments</Link>-Candles
    </div>
    <div className="row pt-3">
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12"> 
    <Link to="/Candle discription">
         <figure className="snip1577">
  <img src={aa} alt="sample99" />
  <figcaption>
    <h3>Alter & Pillar Candles</h3>

  </figcaption>
 
  <a href="#"></a>
</figure>
 </Link>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ab} alt="sample99" />
  <figcaption>
   <h3>Battery Operatd Candles</h3>
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ac} alt="sample99" />
  <figcaption>
    <h3>Candle Jars</h3>
   
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ad} alt="sample99" />
  <figcaption>
    <h3>Candle Plates & Wood Sli....</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ae} alt="sample99" />
  <figcaption>
    <h3>Floating Candles</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={af} alt="sample99" />
  <figcaption>
    <h3>Gift Box Candle Jars</h3>
  
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ag} alt="sample99" />
  <figcaption>
    <h3>Lanterns</h3>
  
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ah} alt="sample99" />
  <figcaption>
    <h3>Miroor & Crystal Candles.</h3>

  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ai} alt="sample99" />
  <figcaption>
    <h3>Tapereed & Candles</h3>
   
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={aj} alt="sample99" />
  <figcaption>
    <h3>Tealight & Candle Holding</h3>
    
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">      <figure className="snip1577">
  <img src={ak} alt="sample99" />
  <figcaption>
    <h3>Tealight Candles</h3>
 
  </figcaption>
  <a href="#"></a>
</figure>
    </div>
    </div>

    </div>
  )
}

export default Candles;
