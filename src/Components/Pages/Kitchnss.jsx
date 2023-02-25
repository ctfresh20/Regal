import React from 'react';
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import aa from "../Super/brand/brands1/kitchen1.png";
function Kitchnss() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ textAlign: "left", marginTop: "3%" }}
      >
        <Link to="/">Home</Link>-<Link to="/Departments">Departments</Link>-<Link to="/Artificial">Kitchenware</Link>-Kitchenware
        Products
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
                          <Link to="/Artificial"> Wash Basin</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Cookware</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Tea Pot</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Dinner Set</Link>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Link to="/Bouquets"> Caseroll</Link>
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
            <h3 style={{ color: "white", fontWeight: "700" }}>
             Kitchen Products
            </h3>
            <font>
              Sometimes an area needs beautifying with foliage, where it would
              not be suitable for a natural tree to survive.
            </font>
            <br />
            <font>
              In such a situation, it may seem that plant life is off the table.
              However artificial trees and
            </font>
            <br />
            .............................
            <br />
            <p>
              <a
                className="btn "
                style={{ boxShadow: "none", textTransform: "none" }}
                data-mdb-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <font style={{ color: "blue" }}>Show All.....</font>
              </a>
            </p>
            <div className="collapse mt-1" id="collapseExample">
              This page is where you can find a complete and extensive range
              which your customers will adore, all at the great low price you
              expect from EFG Housewares.<br /> Artificial trees have become
              extremely popular in recent years, with developments in technology
              allowing for highly realistic designs which look incredibly
              similar to the real thing. Even when touching them, it can be a
              challenge to tell the difference. <br /> This means there are no
              more concerns about disease, feeding, watering or pruning. This
              delivers not only peace-of-mind, but also large savings on the
              ongoing maintenance costs which natural plants can accrue.<br />{" "}
              At EFG Housewares, we have a great collection of artificial trees
              and plants available for wholesale purchases. Our artificial
              plants are sturdy and weather resistant, making them perfect for
              outdoor use, even in the most challenging conditions. Some of our
              favourite artificial products include our cherry blossom stems
              which you can buy in bulk.<br /> Your customers can plan the
              perfect outdoor project, all while knowing that your stock of
              stunning artificial trees and plants are up to the task.<br /> We
              also stock a full range of Display Pieces & Stands, Bouquets and
              Wreaths. These are perfect for complementing artificial trees,
              plants or other botanical pieces. Don’t hesitate to stock a
              complete artificial range which your customers will be instantly
              drawn to.<br /> Have any questions about our range of artificial
              trees and plants? Please don’t hesitate to contact us. We will be
              happy to help you discover our range and find the perfect products
              for your customers.
            </div>
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
<Link to="/Kitchenproduct">
    <img src={aa} style={{width:"100%"}} />
    <div style={{marginTop:"3%"}} className="container text-center" >
    <Link to="/" style={{textDecoration:"none", color:"black"}}>
   Wash Basin 200</Link>
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
  )
}

export default Kitchnss;
