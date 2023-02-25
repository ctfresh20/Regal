import React from 'react';
import aa from "../Super/brand/brands1/kitchen1.png";
import ab from "../Super/brand/brands1/k6.png";
import ac from "../Super/brand/brands1/k2.png";
import ad from "../Super/brand/brands1/k3.png";
import ae from "../Super/brand/brands1/k4.png";
import af from "../Super/brand/brands1/k5.png";
import {Link} from "react-router-dom";
import "./Kitchen.css";
function Kitchen() {
  return (
    <div className="container-fluid">
          <div className="container-fluid" style={{textAlign:"left", marginTop:"3%"}}>
<Link to="/">Home</Link>-<Link to="/Departments">Departments</Link>-Artificial Flowers
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "2%" }}>
<div style={{ padding: "2px", paddingTop: "2%" }}>
<Link to="/Kitchenproducts">
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={aa} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
   Wasin Basin         
                </div>
               
                 
               
              </div>
            </div>
            </Link>   
          </div>
          </div>
           
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "2%" }}>
<div style={{ padding: "2px", paddingTop: "2%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={ab} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                 Cookware Set
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
                
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "2%" }}>
<div style={{ padding: "2px", paddingTop: "2%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={ad} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                 Container
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "2%" }}>
<div style={{ padding: "2px", paddingTop: "2%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={af} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                 Tea Pot
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
                
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "2%" }}>
<div style={{ padding: "2px", paddingTop: "2%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={ac} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                 Cookware Set
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
                
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "2%" }}>
<div style={{ padding: "2px", paddingTop: "2%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={ae} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                 Rice Cooker
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
                
            </div>

        </div>
    </div>
    <div>

    </div>
    </div>
  )
}

export default Kitchen;
