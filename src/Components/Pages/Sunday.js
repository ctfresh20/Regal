import React from 'react';
import sunday from "./images/sunday.jpg";
import back from "./images/bavv.jpg";
import "./Sunday.css";
import * as Icons from "react-icons/fa";
import rose from "./images/rose.jpg";
import water from "./images/water.jpg";
import glass from "./images/glass.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import Feature from './Feature';
function Sunday() {
  return (
    <div>
    <div className="container-fluid">
    <Link to="/Sundays">
      <img src={sunday} style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )"}} className="img-fluid btnss"  />
    </Link></div>
    <div className="container-fluid contain">
        <font style={{fontSize:"40px", color:"#0068b5", fontWeight:"600"}} className="fon1">LOGIN OR CREATE AN ACCOUNT</font>
        <font style={{fontSize:"30px", color:"#0068b5", fontWeight:"600"}} className="fon">LOGIN OR CREATE AN ACCOUNT</font>
<div className="row-col-6 const ">
        <form>

  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" style={{border:"1px solid lightblue"}} />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>


  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" style={{border:"1px solid lightblue"}} />
    <label className="form-label" for="form2Example2">Password</label>
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
 
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example34"  />
        <label className="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
    <Icons.FaFacebook />
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
    <Icons.FaTwitter />
     </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
    <Icons.FaGoogle />
      </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
    <Icons.FaGithub />
     </button>
  </div>
 
</form>
</div>
 <hr style={{marginTop:"3%",color:"black"}} />
    </div>
    <div className="row align-items-center text-center" style={{marginTop:"1%", width:"98%"}}>
    <div className="col-6" text-center>
        <div style={{padding:"4px"}}>
            <img src={rose} style={{width:"100%"}} />
        </div>
    </div>
    <div className="col-6 text-center">
<Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} onSwipeMove={true} onSwipeStart={true} infiniteLoop={true}>
    <div style={{padding:"4px"}}>
    <img src={water}  style={{width:"100%"}}/>
        
    </div>
    <div style={{padding:"4px"}}>
<img src={glass} style={{width:"100%"}} />

    </div>
</Carousel>
</div>
</div>
<div style={{marginTop:"6%"}}>
<Feature />
</div>

    </div>
  )
}

export default Sunday;
