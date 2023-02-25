import React from 'react';
import CaptchaTest from './CaptchaTest';
import "./Login.scss";
function Logins() {
  return (
    <div className="container-fluid main" >


<section className="text-center mains">
  
  <div className=" bg-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: "220px"}}></div>
  

  <div className="card mx-2 mx-md-2 shadow-5-strong" style={{ marginTop: "-200px",background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(5px)"}}>
    <div className="card-body py-2 px-md-2">

      <div className="row d-flex ">
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form>
            
            <div className="row" style={{width:"100%"}}>
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mb-4" >
                <div className="form-outline">
                  <input type="text" id="form3Example1" className="form-control" />
                  <label className="form-label" for="form3Example1">First name</label>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" />
                  <label className="form-label" for="form3Example2">Last name</label>
                </div>
              </div>
            </div>

            
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" for="form3Example3">Email address</label>
            </div>

           
            <div className="form-outline mb-4">
              <input type="password" id="form3Example4" className="form-control" />
              <label className="form-label" for="form3Example4">Password</label>
            </div>

       
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
              <label className="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>

            
            <button type="submit" className="btn btn-primary btn-block  mb-4 w-50" style={{margin:"auto"}} >
              Sign up
            </button>

            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Logins;
