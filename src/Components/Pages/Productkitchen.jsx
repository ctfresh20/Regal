import React from 'react';
import Productkit from './Productkit';
import aa from "../Super/brand/brands1/kitchen1.png";

import {Link} from "react-router-dom";
function Productkitchen() {
  return (
    <div className="container-fluid" style={{marginTop:"5%"}}>
      <div className="row">
      <div class="row w-100">
  <div class="col-lg-3 col-xl-3 col-md-3 col-sm-7 col-7" style={{marginTop:"5%"}}>

    <div
      class="nav flex-column nav-tabs text-center"
      id="v-tabs-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <Link
        class="nav-link active"
        id="v-tabs-home-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-home"
        aria-selected="true"
        >
<img src={aa} style={{width:"100%"}} />
        </Link>
      
    </div>

  </div>

  <div class="col-lg-5 col-xl-5 col-md-5 col-md-9 colsm-9 col-12">

    <div class="tab-content" id="v-tabs-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-tabs-home"
        role="tabpanel"
        aria-labelledby="v-tabs-home-tab"
      >
       <Productkit />
      </div>
     
    </div>

  </div>  <div className="col-lg-4 col-xl-4 col-md-4 col-sm-8 col-8" style={{textAlign:"left"}}>
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

export default Productkitchen;
