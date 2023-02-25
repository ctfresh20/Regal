import React from 'react';

import aa from "./Images/1.jpg";

import {Link} from "react-router-dom";
import Kidszoom from './Kidszoom';
function Kidszoomable() {
  return (
    <div className="container-fluid" style={{marginTop:"5%"}}>
      <div className="row">
      <div className="row w-100">
  <div className="col-lg-4 col-xl-4 col-md-4 col-sm-7 col-7" style={{marginTop:"1%"}}>

   

     <Kidszoom />
    
     
  

  </div>  <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12" style={{textAlign:"right"}}>
  <font style={{fontSize:"25px", color:"skyblue"}}>
  	Condition : New Product</font>
     <br />
     <font style={{fontSize:"20px", color:"aqua"}}>
     4- Reference : WA042
</font>
<br />
<font  style={{fontSize:"18px", color:"skyblue"}}>View Specification</font>
<br/>
 
 <div style={{width:"200px", fontWeight:"700"}} className="btn btn-primary">
 LOGIN TO SEE TRADE PRICES

 </div>
     </div> 
  
</div>
<div className="row mt-5" >
    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
<div style={{padding:"2px", textAlign:"left"}}>
<font style={{fontSize:"15px", fontWeight:"600",color:"black", fontFace:"myFirstFont"}}>Product Details</font>
<hr style={{color:"blue"}} />
</div>
    </div>
    <div className="col-xl-4 col-xl-4 col-md-4 col-sm-12 col-12">
    <div style={{padding:"2px", textAlign:"left"}} >
<font style={{fontSize:"15px", fontWeight:"600",color:"black", fontFace:"myFirstFont"}}>ATTRIBUTE TABS</font>
<hr style={{color:"blue"}} />
<li style={{listStyle:"none", fontWeight:"500"}}>
SKU: 097592
</li>
<li style={{listStyle:"none"}}>
BARCODE: 
</li>
<li style={{listStyle:"none"}}>
SUPPLIER CODE: GB1771SG
</li>
</div>    
    </div>
</div>
<div className="container-fluid">
    
</div>
   
      </div>

    </div>
  )
}

export default Kidszoomable;
