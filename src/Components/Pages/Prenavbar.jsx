import * as React from "react";
import { useState } from "react";
import "./Prenavbar.css";
import aa from "./images/1.jpg";
import log from "./images/looo.jpeg";
import * as Icons from "react-icons/fa";
import * as Icon from "react-icons/bs";
import uk from "./images/uk.png";
import world from "./images/world.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sunday from "./Sunday";
import { Link, useNavigate } from "react-router-dom";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accord from "./Accord/Accord";

function Prenavbar() {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    // 👇️ navigate to /contacts
    navigate('/About Us');
  };
  const navigateToContact = () => {
    // 👇️ navigate to /contacts
    navigate('/Contact Us');
  };
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
  const navigateToDelivery = () => {
    // 👇️ navigate to /contacts
    navigate('/delivery');
  };
  const navigateToHelp = () => {
    // 👇️ navigate to /contacts
    navigate('/Help');
  };
  const navigateToExport = () => {
    // 👇️ navigate to /contacts
    navigate('/export');
  };
  const navigateToDepartments = () => {
    // 👇️ navigate to /contacts
    navigate('/Departments');
  };
  const navigateToArtificial = () => {
    navigate('/Artificial');
  };
  const navigateToSundays = () => {
    navigate('/Sundays');
  };
  const navigateToBrands = () => {
    navigate('/Brands');
  };
  const navigateToElectric = () => {
    navigate('/Electrics');
  };
  const navigateToKitchenware = () => {
    navigate('/Kitchenware');
  };
  const navigateToBattery = () => {
    navigate('/Battery');
  };
  const navigateToCandle = () => {
    navigate('/Candles');
  };
  const navigateToBathroom = () => {
    navigate('/Bathwares');
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 950 },
      items: 2,

    },
 
    tablet: {
      breakpoint: { max: 950, min: 0 },
      items: 1,

    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div className="container-fluid">
      <div className="row sele1" style={{ backgroundColor: "white" }}>
        <div className="d-flex justify-content-end col-12">
          <div
            className="border-end btns border-start"
            style={{ marginRight: "2%", paddingRight: "1%", paddingLeft: "1%" }}
          >
            <Link to="/About Us">            ABOUT US</Link>

          </div>
          <div
            className="border-end btns"
            style={{ marginRight: "2%", paddingRight: "1%" }}
          >
            <Link to="/Contact Us">
              CONTACT US</Link>
          </div>
          <div
            className="border-end btns"
            style={{ marginRight: "2%", paddingRight: "1%" }}
          ><Link to="/delivery">
              DELIVERY</Link>
          </div>
          <div
            className="border-end btns"
            style={{ marginRight: "2%", paddingRight: "1%" }}
          >
            <Link to="/Help">
              HELP/FAQ</Link>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center sele " style={{ width: "100%" }}>

        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Select Page
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><Link to="/" className="dropdown-item" >Home</Link></li>
          <li><Link to="/About Us" className="dropdown-item" >About Us</Link></li>
          <li><Link to="/Contact Us" className="dropdown-item" >Contact</Link></li>
          <li><Link to="/delivery" className="dropdown-item" >delivery</Link></li>
          <li><Link to="/Help" className="dropdown-item" >Help</Link></li>
        </ul>
      </div>

      <div
        className="container-fluid contai "
        style={{ backgroundImage: `url(${aa})`, width: "100%" }}
        id="otu"
      >
        <div className="row align-items-center ">
          <div className="col-3">
            <Link to="/">
              <img
                src={log}
                style={{ width: "80%", paddingTop: "5%", paddingBottom: "4%" }}
                className="img-fluid"
              /></Link>
          </div>
          <div className="col-9">
            <div className="d-flex justify-content-end">
              <div className="row">
                <div className="col-8" style={{ textAlign: "right" }}>
                  <div className="input-group" style={{ paddingTop: "3%" }}>
                    <div className="form-outline">
                      <input
                        type="search"
                        id="form1"
                        className="form-control"
                        style={{
                          border: "1px solid white",
                          backgroundColor: "white"
                        }}
                      />
                      <label className="form-label" for="form1">
                        Search
                      </label>
                    </div>
                    <button type="button" className="btn btn-primary">
                      <Icons.FaSearch style={{ color: "white" }} />
                    </button>
                  </div>
                </div>
                <div className="col-2 text-center ">
                  <Link to="/Register" style={{ textDecoration: "none" }} className="ico">
                    <Icons.FaRegIdBadge style={{ fontSize: "30px" }} />
                    <br />
                    Register</Link>
                </div>
                <div className="col-2 text-center ">
                  <Link to="/Login" style={{ textDecoration: "none" }} className="ico">
                    <Icon.BsPerson style={{ fontSize: "32px" }} />
                    <br /> Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid contai "
        style={{ backgroundImage: `url(${aa})` }}

        id="ot"
      >
        <div className="row-col-12 text-center">
          <Link to="/">
            <img
              src={log}
              className="img-fluid"
              style={{ width: "30%", paddingTop: "3%" }}
            /></Link>
        </div>
        <div className="row  ">
          <div className="col-3" style={{ paddingTop: "3%" }}>
            <div className="btns" onClick={handleShow}>
              <Icons.FaList className="ico" style={{ fontSize: "30px" }} />
            </div>

            <Offcanvas show={show} style={{ width: "70%" }} onHide={handleClose}>
              <Offcanvas.Header style={{ backgroundColor: "#0068B5" }} closeButton>
                <Offcanvas.Title className="text-center" ><Link to="/"><img src={log} style={{ width: "100%" }} /></Link></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ textAlign: "left" }}>
                <Accord />
              </Offcanvas.Body>
            
            </Offcanvas>

          </div>

          <div className="col-3" style={{ paddingTop: "1.9%" }}>
            <button type="button" className="btns btn ">
              <Icons.FaSearch className="ico" style={{ fontSize: "29px" }} />
            </button>
          </div>
          <div
            className="col-3  text-center"
            id="fon"
            style={{ paddingTop: "2%" }}
          > <Link to="/Register" className="ico">
              <Icons.FaRegIdBadge style={{ fontSize: "30px" }} />

              <br />
              <font>

                Register</font> </Link>
            <Link to="/Register" className="ico">
              <Icons.FaRegIdBadge id="fon1" style={{ fontSize: "32px" }} /></Link>
          </div>
          <div
            className="col-3 ico text-center"
            id="fon1"
            style={{ paddingTop: "3%" }}
          ><Link to="/Register" className="ico">
              <Icons.FaRegIdBadge id="fon1" style={{ fontSize: "33px" }} /></Link>
          </div>
          <div
            className="col-3 ico text-center"
            id="fon"
            style={{ paddingTop: "2%" }}
          ><Link to="/Login" className="ico">
              <Icon.BsPerson id="fon" style={{ fontSize: "32px" }} />

              <br id="fon" />
              <font id="fon"> Sign in</font></Link>
          </div>
          <div
            className="col-3 text-center"
            id="fon1"
            style={{ paddingTop: "3.5%" }}
          ><Link to="/Login" className="ico">
              <Icon.BsPerson id="fon1" style={{ fontSize: "35px" }} /></Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#0068B5", width: "100%" }}
      >
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-space-between"

          >
            <ul
              className="navbar-nav me-auto ps-lg-0"
              style={{ paddingLeft: "0.15rem" }}
            >
              <li
                className="nav-item dropdown  dropdown-hover "
                style={{ padding: "5px" }}
              >
                <Link
                  className="nav-link  butto rows1 btns"
                  to="/"
                  id="navbarDropdown"

                  aria-expanded="false"
                  style={{ width: "100%" }}
                >
                  HOME
                </Link>

              </li>
              <li
                className="nav-item dropdown dropdown-hover position-static"
                style={{ padding: "5px" }}
              >
                <div
                  className="nav-link  butto rows1 btns"

                  id="navbarDropdown"


                  aria-expanded="true"
                  style={{ width: "100%" }}
                  onClick={navigateToDepartments}
                >
                  DEPARTMENTS
                </div>

                <div
                  className="dropdown-menu w-98"
                  aria-labelledby="navbarDropdown" style={{ marginTop: "-1.2%" }}

                >
                  <div className="container-fluid overflow-y-scroll scroll row w-98 ">
                    <div className="row my-4 ">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              <Link to="/Artificial" style={{ color: "#0068B5", textDecoration: "none" }}>  ARTIFICIAL FLOWERS</Link>
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Artificial
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bouquets
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Garland/Hanging
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Flowers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Single Stems
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/Bathwares" style={{ textDecoration: "none" }}>
                              BATHROOMS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bath Mats
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bathroom Accesseroies
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bathroom Scales
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Mirrors
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/Battery" style={{ textDecoration: "none" }}>
                              BATTERIES
                            </Link>
                          </h5>

                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/Candles" style={{ textDecoration: "none" }}>
                              CANDLES & CANDLE HOLDER
                            </Link>
                          </h5>
                          <Link to="/Candle Alter"
                            className="list-group-item list-group-item-action"
                          >
                            Alter & Pillar Candles
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Battery Operated
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Candles
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Candle Jars
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Candle Plates & Wood SLices
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              CHINA
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Cookware
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Crokery
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Dinnersets
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Drinking Glasses
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              CHRISTMAS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Christmas Candles & Gifts
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Christmas Memorial
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Christmas Pet
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Crackers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              CLEANING/MATERIALS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Brushware
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Clothes & Dusters
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Glovers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Mops/Squeegees
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              DISPOSABLE BAGS & TABLEWARE
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bin/Bag Carrier
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bag/Paper Bag
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Disposable Tableware
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              DIY
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Akzonobel
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Amtech Tools
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Antiquax
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Axus Decor
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>

                            <Link to="/Electrics" style={{ textDecoration: "none" }}>          Electrical</Link>

                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Clocks
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Doorbells/Smoke
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            ALarms
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Dummy Cameras
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Earphones/Speakers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              FRAMES & MIRRORS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Clip Frames
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Mirrors
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Multi Frames
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Photo Album & Boxes
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              GARDENING
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bbq
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bird Care
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Camping
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Fertilisers & Chemicals
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              GIFTWARE
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Buddhas Elephants &{" "}
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Pineapples
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Charger Plates
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Gifts For Ladies & Girls
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Gifts For Men & Boys
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              GLASSWARE
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Cakestands
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Crystal
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Drinking Glasses
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Glass Decorative & Gift
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              Hardware
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Furniture
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Mats & Rugs
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Metal Buckets/Bins
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              HOUSEHOLD & CLEANERS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Air Fresheners
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bathroom Cleaners
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bleach
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Car Care
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              INCENSE/OILS/<br />DIFFUSERS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Diffusers{" "}
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Fragrance Oils & Burners
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Incense Cones & Holders
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Incense Sticks & Holders
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              KIDS PRODUCTS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Baby Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Character Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Kids Storage
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              KITCHENWARE
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bakeware
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Barware
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Catering
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Chrome
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              LAUNDARY STORAGE & LUGGAGE
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Airers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Backpacks
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Ironing Boards & Covers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Laundary Accessories
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              PARTYWARE
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Baloon Weights
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Baloons/Pumps
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Banners
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Birthday Badges
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              PEST CONTROL
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Lodi Uk
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Rentokil
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            STV International
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              PET PRODUCTS
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bird Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Cat Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Dog Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Fish Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              PHONE ACCESSORIES
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Airers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Backpacks
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Ironing Boards & Covers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Laundary Accessories
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              PLASTIC HOUSEWARES
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Food Containers
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Kids Plastic Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Melamine & Outdoor
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Plastic Bathroom
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              POUND LINES
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bathroom/Cosmetics/Beauty
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Candles/Air
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Fresheners/Diffuse
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Car Products
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Craft
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              SEASONAL/SPORTS/
                            </Link><br />HOM
                            EWARE
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Cooler Bags & Cool
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Boxes
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Hot Water Bottles
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Picnic/Outdoors
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              SMOKING PRODUCTS
                            </Link>
                          </h5>
                          <Link to="/Electrics"
                            className="list-group-item list-group-item-action"
                          >
                            Electrical
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Lighters & Matches
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Smoking Essentials
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Vaping
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              STATIONARY
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Art & Craft
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Books
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Diaries/Calendars/Address
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Kids
                          </Link>

                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              TEXTILES & ACCESSORIES
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Aprons/Oven Gloves
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Bedding
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Clothing & Accesseroies
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Curtains & Draught
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Excluders
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              TOILETERIES
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Baby Care
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Cotton Wool/Buds
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Deodrant/Bodyspray
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Gift Sets
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <h5 style={{ color: "#0068B5", fontWeight: "700" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                              Toys
                            </Link>
                          </h5>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Art & Craft
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Balls
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Boys Toys
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            Cars/Motorbikes/Trains/Planes
                          </Link>
                          <Link to="/"
                            className="list-group-item list-group-item-action"
                          >
                            View All <Icons.FaAngleRight />
                          </Link>
                        </div>
                      </div>

                    </div>




                  </div>
                  <div className="container-fluid text-white text-center" style={{ backgroundColor: "black", height: "5vh", textAlign: "center" }}>







                    FREE DELIVERY WHEN YOU SPEND £650 OR MORE TO UK MAINLAND ADDRESSES
                  </div>

                </div>
              </li>
              <li
                className="nav-item dropdown dropdown-hover position-static"
                style={{ padding: "5px" }}
              >
                <Link to="/Sundays"
                  className="nav-link  butto rows1 btns"
                  href="#"
                  id="navbarDropdown"

                  aria-expanded="false"
                  style={{ width: "100%" }}
                >
                  SUPER SUNDAY OFFERS
                </Link>
                <div
                  className="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0"
                  }}
                >
                  <div className="container">
                    <div className="row my-2" />
                  </div>
                </div>
              </li>
              <li
                className="nav-item dropdown dropdown-hover position-static"
                style={{ padding: "5px" }}
              >
                <Link to="/Brands"
                  className="nav-link  butto rows1 btns"
                  href="#"
                  id="navbarDropdown"

                  aria-expanded="false"
                  style={{ width: "100%" }}
                >
                  SHOP BY BRAND
                </Link>
                <div
                  className="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0"
                  }}
                >
                  <div className="container">
                    <div className="row my-2" />
                  </div>
                </div>
              </li>
              <li
                className="nav-item dropdown dropdown-hover position-static"
                style={{ padding: "5px" }}
              >
                <a
                  className="nav-link  butto rows1 btns"
                  href="#"
                  id="navbarDropdown"

                  aria-expanded="false"
                  style={{ width: "100%" }}
                >
                  BEST SELLERS
                </a>
                <div
                  className="dropdown-menu dropdown w-100 "
                  aria-labelledby="navbarDropdown"
                  style={{ marginTop: "-1.5%", zIndex: "999!important", backgroundColor: "white" }}
                >

                  <div className="row mt-3 overflow-visible" >
                    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 ">
                      <div className="list-group list-group-flush">
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica", paddingLeft: "2%" }}>
                          <Link to="/" style={{ textDecoration: "none" }}>
                            BATTERIES
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", paddingLeft: "2%" }}>
                          DIY
                        </h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", marginTop: "3%", paddingLeft: "2%" }}>
                          GLASSWARE
                        </h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica", paddingLeft: "2%" }}>
                          <Link to="/" style={{ textDecoration: "none" }}>
                            PET PRODUCTS
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica", paddingLeft: "2%" }}>
                          <Link to="/" style={{ textDecoration: "none" }}>
                            TOILETRIES
                          </Link></h5>
                      </div>


                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12  
">
                      <div className="list-group list-group-flush">
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            CHINA
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>

                          <Link to="/Electrics" style={{ textDecoration: "none" }}>  ELECTRICAL</Link>
                        </h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", marginTop: "3%" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            HOUSEHOLD CLEANERS</Link>
                        </h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            PLASTIC HOUSEWARES
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            TOYS
                          </Link></h5>
                      </div>


                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12 mb-3 mb-md-0">
                      <div className="list-group list-group-flush">
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            CLEANING/ MATERIALS
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            FOOD & DRINK
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", marginTop: "3%" }}>
                          KITCHENWARE
                        </h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            POUND LINES
                          </Link></h5>
                      </div>


                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-12">
                      <div className="list-group list-group-flush">
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            DISPOSABLE BAGS & TABLEWARE
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            GARDENING
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            LAUNDARY STORAGE & LUGGAGE
                          </Link></h5>
                        <h5 style={{ color: "#0068B5", fontWeight: "600", fontSize: "15px", fontFace: "MyHelvetica" }}>
                          <Link to="/anything" style={{ textDecoration: "none" }}>
                            STATIONARY           </Link>               </h5>
                      </div>


                    </div>
                  </div>
                  <div className="container-fluid text-white text-center" style={{ backgroundColor: "black", height: "5vh" }}>
                    FREE DELIVERY WHEN YOU SPEND £650 OR MORE TO UK MAINLAND ADDRESSES
                  </div>
                </div>

              </li>
              <li
                className="nav-item dropdown dropdown-hover position-static"
                style={{ padding: "5px" }}
              >
                <Link
                  className="nav-link  butto rows1 btns"
                  to="/Arrival"
                  id="navbarDropdown"

                  aria-expanded="false"
                  style={{ width: "100%" }}
                >
                  NEW ARRIVALS
                </Link>
                <div
                  className="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0"
                  }}
                >
                  <div className="container">
                    <div className="row my-2" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid border-bottom overflow-x-scroll overflow-hidden scroll"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        
        <Carousel responsive={responsive} removeArrowOnDeviceType={["desktop"]}>

          <div className="col-12 btn text-center" id="btnss" onClick={navigateToDelivery}>
            <img src={uk} style={{ width: "7%", marginRight: "2%" }} />FREE UK
            DELIVERY ON ORDERS OVER
          </div>
          <div className="col-12 btn text-center " id="btnss" onClick={navigateToExport}>
            <img
              src={world}
              style={{ width: "7%", marginRight: "2%" }}
            />EXPORT & FMCG SALES IMPORTANT
          </div>

        </Carousel>

      </div>


    </div>
  );
}

export default Prenavbar;
