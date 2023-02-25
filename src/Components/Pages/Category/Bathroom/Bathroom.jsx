import React from 'react';
import aa from "./Images/1.jpeg";
import  "./Bathroom.css";
import {Link} from "react-router-dom";
function Bathroom() {
  return (
    <div className="container-fluid">
    <div className="containe-fluid pt-5" style={{textAlign:"left"}}>
    <Link to="/">Home</Link>-<Link to="/Departments">Departments</Link>-Bathroom
<main className="page-content pt-4">
<Link to="/Bath mats">
  <div className="cards">
    <div className="content">
      
      <button className="btno">Bath Mats</button>
    </div>
  </div></Link>
  <div className="cards">
    <div className="content">
     
      <button className="btno">Bathroom Accesseroies</button>
    </div>
  </div>
  <div className="cards">
    <div className="content">
     
      <button className="btno">Bathroom Scales</button>
    </div>
  </div>
  <div className="cards">
    <div className="content">
        <button className="btno">Mirrors</button>
    </div>
  </div>
</main>
      </div>
    </div>
  )
}

export default Bathroom;
