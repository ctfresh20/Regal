import React from "react";
import contain from "../Artificial Flowers/department/containers.jpg";
import { Link } from "react-router-dom";
import "./Export.css";
import Productsss from "./Productsss";


function Export() {
  return (
    <div className="container-fluid">
      <div style={{ marginTop: "4%", textAlign: "left" }}>
        <Link to="/">Home</Link>- Export
      </div>
      <div className="container-fluid" style={{ marginTop: "3%" }}>
        <h4 style={{ fontWeight: "700", fontSize: "30px", color: "black" }}>
          <u>EXPORT & FMCG SALES</u>
        </h4>
      </div>
      <div className="container-fluid" style={{ marginTop: "3%" }}>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div style={{ padding: "3px" }}>
              <img src={contain} style={{ width: "100%" }} />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div style={{ padding: "3px", textAlign: "left" }}>
              <h2
                style={{ fontWeight: "bold", fontSize: "17px", color: "black" }}
              >
                Welcome to EFG Housewares Export and FMCG page.
              </h2>
              <p
                style={{
                  fontFace: "myFirstFont",
                  fontSize: "14px",
                  fontWeight: "700px",
                  color: "black"
                }}
              >
                We are the UK’s largest independent wholesaler and are
                conveniently based in London, successfully trading for over 45
                years, and since 1999 we have been trading with companies, both
                small and large across the globe.
              </p>
              <p
                style={{
                  fontFace: "myFirstFont",
                  fontSize: "14px",
                  fontWeight: "700px",
                  color: "black"
                }}
              >
                As export wholesalers, we consider ourselves as specialists in
                Europe, Middle East and the African continents, whether this is
                palletised stock or 20-foot and 40-foot containers. Our Export
                and FMCG sales team can handle almost any request.
              </p>
              <p
                style={{
                  fontFace: "myFirstFont",
                  fontSize: "14px",
                  fontWeight: "600px",
                  color: "black"
                }}
              >
                By signing up to EFG’s purpose-built website you will be not
                only be able to take advantage of over 50,000 product lines from
                over 1,000 carefully selected suppliers 24 hours a day, 7 days a
                week and 365 days a year, but the latest deals and offers that
                are available.
              </p>
              <p
                style={{
                  fontFace: "myFirstFont",
                  fontSize: "14px",
                  fontWeight: "600px",
                  color: "black"
                }}
              >
                EFG Housewares is quite rightly enormously proud of the range we
                carry, and we can really claim to be a one stop shop we have a
                huge range across Toiletries, Cleaning, Household, Electrical,
                Kitchenware, DIY, Gardening, Christmas, and many more. We also
                have a huge selection of household brands at competitive prices
                such as Johnson’s baby, Comfort, Palmolive, Ariel, Dove, Flash,
                Care, Colgate, Nivea and many more.
              </p>
              <p
                style={{
                  fontFace: "myFirstFont",
                  fontSize: "14px",
                  fontWeight: "600px",
                  color: "black"
                }}
              >
                So if you're looking for UK export wholesalers and FMCG
                wholesale distributors, let EFG be your Export and FMCG partner
                today and together we can increase your profit and range!
              </p>
              <p
                style={{
                  fontFace: "myFirstFont",
                  fontSize: "14px",
                  fontWeight: "700px",
                  color: "black"
                }}
              >
                If you would like to discuss or enquire about any aspect of our
                Export and FMCG needs, please feel free to contact our Export
                and FMCG team on +44 (0) 208 344 6326 today or alternatively,
                send an email to daniel@efghousewares.co.uk
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{marginTop:"3%"}}>
        <font style={{color:"black", fontSize:"16px", fontWeight:'bold',}}>Our Promises</font>
      </div>
      <div className="row" style={{marginTop:"3%"}}>
        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 mt-2"    >
        <div className="btn btnssss active btn-rounded text-white" style={{backgroundColor:"	#00BFFF"}}> 
        <font style={{color:"white", fontWeight:"bold"}} className="price">SERVICE</font>

<br/><font style={{fontWeight:"bold", color:"white"}} className="prices">Our Service team will Assist You at every step of the way</font>
</div>
      </div>
      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 mt-2"  >
      <div className="btn btnssss active  btn-rounded text-white" style={{backgroundColor:"	#00BFFF"}} >
      <font style={{color:"white", fontWeight:"bold"}} className="price">SELECTION</font>

<br/><font style={{fontWeight:"bold", color:"white"}} className="prices">Over 50,000 Products And Over 1000 Brands to choose from</font>
</div>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 mt-2 "  >
        <div className="btn btnssss active  btn-rounded" style={{backgroundColor:"	#00BFFF"}}>
        <font style={{color:"white", fontWeight:"bold"}} className="price">PRICE</font>

<br/><font style={{fontWeight:"bold", color:"white"}} className="prices">Competetive prices on the most trusted brands .</font>
<br/>
</div>
        </div>
        </div>
        <div className="container-fluid" style={{marginTop:"3%"}}>
        <font style={{color:"black", fontSize:"15px", fontWeight:"600"}}>YOUR FAVOURITE BRANDS</font>
<div style={{marginTop:"2%"}}>
        <Productsss />
        </div>
        </div>
    </div>
  );
}

export default Export;
