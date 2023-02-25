import React from 'react';
import aa from "../Super/brand/brands1/brands/electric/1.png";
import ab from "../Super/brand/brands1/brands/electric/2.png";
import ac from "../Super/brand/brands1/brands/electric/3.png";
import ad from "../Super/brand/brands1/brands/electric/4.png";
import ae from "../Super/brand/brands1/brands/electric/5.png";

import {Link} from "react-router-dom";
import "./Electric.css";
function Kitchen() {
  return (
    <div className="container-fluid">
          <div className="container-fluid" style={{textAlign:"left", marginTop:"3%"}}>
<Link to="/">Home</Link>-<Link to="/Departments">Departments</Link>-Electrical
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "4%" }}>
<div style={{ padding: "2px", paddingTop: "4%" }}>
<Link to="/Electricdescription">
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={aa} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
   Heater         
                </div>
               
                 
               
              </div>
            </div>
            </Link>   
          </div>
          </div>
           
            </div>
           
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "4%" }}>
<div style={{ padding: "2px", paddingTop: "4%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={ad} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                 Electric Fan
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "4%" }}>
<div style={{ padding: "2px", paddingTop: "4%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={aa} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                Electric Heater
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
                
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "4%" }}>
<div style={{ padding: "2px", paddingTop: "4%" }}>
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={ac} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text textt" >
                Extension Board
                </div>
               
                 
               
              </div>
            </div>
          </div>
          </div>
                
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div style={{ padding: "2px", paddingTop: "4%" }}>
<div style={{ padding: "2px", paddingTop: "4%" }}>
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
