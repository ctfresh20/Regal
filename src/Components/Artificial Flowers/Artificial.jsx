import React from 'react';
import {Link} from "react-router-dom";
import aa from "./1.jpg";
import ab from "./2.jpeg";
import ac from "./3.jpg";
import ad from "./4.jpeg";
import ae from "./5.jpg";
import "./Artificial.css";
function Artificial() {
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
<Link to="/Artificialtre">
            <div className="card bg-image hover-zoom ">
              <img className="card-img" src={aa} alt="image" />
              <div className="card-img-overlay text-white" >
             
                <div className="card-text " id="textt" >
   Artificial Trees         
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
             
                <div className="card-text " id="textt" >
                 Bouquets
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
             
                <div className="card-text " id="textt" >
                 Garlands/Hanging Flower
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
             
                <div className="card-text " id="textt" >
                 Single Stems
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
             
                <div className="card-text " id="textt" >
                 Wreathes/Xmas/Picks
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

export default Artificial;
