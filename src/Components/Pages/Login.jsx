import React from 'react';
import "./Login.scss";
import Logins from './Logins';
function Login() {
  return (
    <div className="container-fluid ">
     <div className="well">
  <div className="row text-center" style={{width:"80%", margin:"auto"}} >
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
      <div className="form-group">
        <label for="line1">Address 1</label>
        <input type="text" className="form-control" placeholder="E.g. 32 Job Street" required />
      </div>
    </div>
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
      <div className="form-group">
        <label for="line1">Address 2</label>
        <input type="text" className="form-control" placeholder="E.g. Second Floor" />
      </div>
    </div>
  </div>
  <div className="row" style={{width:"80%", margin:"auto"}}>
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
      <div className="form-group">
         <label for="line1">City</label>
        <input type="text" className="form-control" placeholder="E.g. London" />
      </div>
    </div>
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 col-sm-offset-3">
      <div className="form-group">
        <label for="line1">Country</label>
        <select name="country" className="form-control" id="" required>
          <option value="uk">United Kingdom</option>
          <option value="uk">India</option>
          <option value="uk">United States</option>
          <option value="uk">Australia</option>
          <option value="uk">Canada</option>
          <option value="uk">Russia</option>
        </select>
      </div>
    </div>
  </div>
  <div className="row" style={{width:"80%", margin:"auto"}}>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="form-group">
        <label for="line1">Post code</label>
        <input type="text" className="form-control" placeholder="E.g. SW1 3NL" required />
      </div>
    </div>
    
  </div>
</div>
 <p style={{textAlign:"left", color:"black", marginTop:"2%", color:"black", fontWeight:"400", fontSize:"25px"}}>LOGIN DETAILS</p>
      <hr style={{color:"black", border:"1px solid black"}} />
<div style={{marginTop:"2%", width:"100%"}}>
<Logins />
</div>
    </div>
  )
}

export default Login;
