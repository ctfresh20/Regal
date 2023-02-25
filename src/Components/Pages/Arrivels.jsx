import React from 'react';
import space from "../Super/brand/brands1/brands/rocket.jpg";

import "./Arrivels.css";
function Arrivels() {
  return (
    <div className="container-fluid">
    <div className="row">
         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-6">
<div className="p-6">
<img className="static img-fluid" src={space} />

</div>
         </div>
         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-6">
    <div className="p-6">
    <img className="static img-fluid" src={space} />
</div>        
         </div>
         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-6">
            
         <div className="p-6">
         <img className="static img-fluid" src={space} />
    </div>        
         </div>
         <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-6">
            
            <div className="p-6">
            <img className="static img-fluid" src={space} />
       </div>        
            </div>
    </div>
      
    </div>
  )
}

export default Arrivels;
