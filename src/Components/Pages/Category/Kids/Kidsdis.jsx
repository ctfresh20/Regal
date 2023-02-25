import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import aa from "./Images/1.jpg";
import ab from "./Images/2.jpeg";
import ac from "./Images/3.jpg";


function Kidsdis() {
  const [state, setState] = useState("desktop");

  return (
    <div className="container-fluid">
      <div
        className="container-fluid"
        style={{ textAlign: "left", marginTop: "3%" }}
      >
        <Link to="/">Home</Link>-<Link to="/Departments">Departments</Link>-<Link to="/Kids">Kids</Link>- Kids Material
        
      </div>
      <div className="container-fluid" style={{ marginTop: "3%" }}>
        <div className="row">
          <div className="col-lg-3 col-xl-3 d-md-block d-none">
            <div style={{ padding: "2px" }}>
              <div style={{ backgroundColor: "#0068B5", color: "white" }}>
                Shop By
              </div>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={{ textAlign: "left" }}>
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Categories
                    </button>
                  </h3>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Artificial"> Artificial Trees</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Bouquets</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Garlands/Hanging Flowers</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Single Stems</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Wreath/Picks/Xmas</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Stock Status
                    </button>
                  </h3>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                  >
                    <div
                      className="accordion-body"
                      style={{ textAlign: "left" }}
                    >
                      <ul>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> IN Stock</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Out Of Stock</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-9 col-xl-9 col-md-12 col-sm-12 col-12"
            style={{ textAlign: "left" }}
          >
            <h3 style={{ color: "black", fontWeight: "700" }}>
              Candles
            </h3>
            <div className="border-bottom border-top">
              <div
                className="containe-fluid"
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
              >
                <div className="row">
                  <div
                    className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12"
                    style={{ marginTop: "1px" }}
                  >
                    <div className="row">
                      <div className="col-4">SORT BY</div>
                      <div className="col-8">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Name A-Z</option>
                          <option value="1">Name Z-A</option>
                          <option value="2">Price High to Low</option>
                          <option value="3">Price Low to High</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12"
                    style={{ marginTop: "1px" }}
                  >
                    <div className="row">
                      <div className="col-3" style={{ float: "left" }}>
                        Views
                      </div>
                      <div className="col-9">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Name A-Z</option>
                          <option value="1">Name Z-A</option>
                          <option value="2">Price High to Low</option>
                          <option value="3">Price Low to High</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12"
                    style={{ marginTop: "1px" }}
                  >
                    <div className="row">
                      <div className="col-6">1 To 12 of 12</div>
                      <div className="col-6">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>12</option>
                          <option value="1">24</option>
                          <option value="2">36</option>
                          <option value="3">48</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" style={{marginTop:"3%"}}>
<Link to="/Kids Description">
    <img src={aa} style={{width:"100%"}} />
    <div style={{marginTop:"3%"}} className="container text-center" >
    <Link to="/" style={{textDecoration:"none", color:"black"}}>
    Bbq</Link>
    </div>
</Link>
    <div className="container-fluid btn btn-primary" style={{marginTop:"3%"}}>
LOGIN TO SEE TRADE PRICES
    </div>

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" style={{marginTop:"3%"}}>
<Link to="/anything">
    <img src={ab} style={{width:"100%"}} />
    <div style={{marginTop:"3%"}} className="container text-center" >
    <Link to="/" style={{textDecoration:"none", color:"black"}}>
   Birdcare</Link>
    </div>
</Link>
    <div className="container-fluid btn btn-primary" style={{marginTop:"3%"}}>
LOGIN TO SEE TRADE PRICES
    </div>

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" style={{marginTop:"3%"}}>
<Link to="/anything">
    <img src={ac} style={{width:"100%"}} />
    <div style={{marginTop:"3%"}} className="container text-center" >
    <Link to="/" style={{textDecoration:"none", color:"black"}}>
  Campaign</Link>
    </div>
</Link>
    <div className="container-fluid btn btn-primary" style={{marginTop:"3%"}}>
LOGIN TO SEE TRADE PRICES
    </div>

                    </div>

                 
</div>
                </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Kidsdis;
