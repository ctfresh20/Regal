import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Feature.css";
import Feature2 from './Feature2';
import ab from "./images/2.jpg";
import ac from "./images/3.jpg";
import ad from "./images/4.jpg";
import ae from "./images/5.jpg";
import af from "./images/rr.jpg";
function Feature() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="container-fluid">
    <div className="row align-items-center">
        <div className="col-4">
 <hr />
        </div>
        <div className="col-4 text-center">
<font id="fonnn" >
FEATURED BRANDS
</font>
        </div>
        <div className="col-4">
<hr />
        </div>
    </div>
    <div style={{marginTop:"4%"}}>
    <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]}>
<div>
    <img src={ab} style={{width:"80%"}} />
  <p>CHEF AID, An extensive range of products for the kitchen & home.</p>
</div>
<div>
    <img src={ac} style={{width:"80%"}} />
  <p>WHAM, UK’s largest manufacturer of home plastics.</p>
</div>
<div>
    <img src={ad} style={{width:"80%"}} />
  <p>ASTONISH, UK Manufactured efficient cleaning products.</p>
</div>
<div>
    <img src={ae} style={{width:"80%"}} />
  <p>PYREX, The most recognisable brand of oven safe glassware.</p>
</div>
<div>
    <img src={af} style={{width:"80%"}}  />
  <p>AMTECH TOOLS, A Leading UK DIY & Power Tools Brand..</p>
</div>

    </Carousel>
    </div>
    <hr  style={{marginTOp:"2%"}} />
    <div style={{marginTop:"3%"}}>
        <Feature2 />
    </div>

    </div>
  )
}

export default Feature;
