import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aa from "./images/n.jpg";
import ab from "./images/dd.jpg";
import ac from "./images/dispo.jpg";
import ad from "./images/ho.jpg";
import ae from "./images/cleani.jpg";
import af from "./images/plastics.jpg";
import ag from "./images/party.jpg";
import ah from "./images/kitchen.jpg";
import ai from "./images/cook.jpg";
import aj from "./images/bake.jpg";
import ak from "./images/toileteries.jpg";
import al from "./images/pet.jpg";
import am from "./images/stationary.jpg";
import an from "./images/depart.jpg";
import "./Feature2.css";
import {Link} from "react-router-dom";

function Feature2() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
             <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
             <Link to="Diy">
<img src={aa} style={{width:"100%"}} />
</Link>
             </Carousel>
            </div>
            <div className="col-6">
<Carousel  responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>

<div>
<img src={ab} style={{width:"100%"}} />
</div>

</Carousel>
            </div>
        </div>
    </div>
    <div className="row" style={{width:"100%",marginLeft:".3%"}}>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/Disposable">
    <img src={ac} style={{width:"100%"}} /></Link>
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/Household">
    <img src={ad} style={{width:"100%"}} />
    </Link>
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/Cleaning">
    <img src={ae} style={{width:"100%"}} /></Link>
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/Plastics">
    <img src={af} style={{width:"100%"}} />
    </Link>
</Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>

<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/Partyware">
    <img src={ag} style={{width:"100%"}} />
    </Link>
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/Kitchenware">
    <img src={ah} style={{width:"100%"}} /></Link>
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
<Link to="/China">
    <img src={ai} style={{width:"100%"}} /></Link>
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>

    <img src={aj} style={{width:"100%"}} />
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>

    <img src={ak} style={{width:"100%"}} />
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>

    <img src={al} style={{width:"100%"}} />
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>

    <img src={am} style={{width:"100%"}} />
    </Carousel>
</div>
<div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 text-center" style={{marginTop:"2%"}}>
<Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile",'superLargeDesktop','desktop']}>
  <div>
  <Link to="/Departments">
    <img src={an} style={{width:"100%"}} /></Link>
    </div>
  
    </Carousel>
</div>
      <div className="container-fluid d-md-block d-none" style={{marginTop:"8%"}}>
        <h1 style={{color:"black"}}>WELCOME TO EFG, THE UK'S LARGEST INDEPENDENT WHOLESALER.</h1>
      </div>
      <div className="container-fluid d-md-none d-block" style={{marginTop:"10%"}}>
        <h2 style={{color:"black", fontWeight:"700"}}>WELCOME TO EFG, THE UK'S LARGEST INDEPENDENT WHOLESALER.</h2>
      </div>
      <p style={{marginTop:"4%", textAlign:"left", fontWeight:"500"}}>
      Welcome to the EFG Housewares trade website. We are proud to say we are the UK’s largest independent trade only wholesale business.  EFG have been trading since 1976 from the same North London site in Enfield and many thousands of customers over the years have come to regard us as a trusted part of their business. As the UK’s number one Cash and Carry wholesaler, we understand what you require from a UK Wholesale supplier and that is the largest range, at the best prices, every day. We are now absolutely delighted to be able to bring the EFG difference to you via a brand-new purpose-built online wholesale website that covers over 50,000 product lines from over a 1000 of the UK’s most trusted brands - available to you 24/7, 365 days a year.</p>
   <p style={{marginTop:"2%",textAlign:"left", fontWeight:"500"}}>
   By opening a trade account with EFG you will not only enjoy a huge product selection, but also a class leading experience from order to delivery and with a dedicated team based in London you can be sure we can assist you every step of the way. Our business has grown over the last 45 years to be one the UK’s most trusted UK wholesale businesses and now not just UK based customers enjoy the difference EFG have hundreds of clients all over the globe to be able to offer a one stop shop. Let EFG be your wholesale partner, and together we can increase your profit and range!
   </p>
   <p style={{marginTop:"2%",textAlign:"left", fontWeight:"500"}}>
   EFG Everything under One Roof!
   </p>
    </div>


    </div>
  )
}

export default Feature2;
