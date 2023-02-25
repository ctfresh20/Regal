import React from 'react';
import * as Icons from "react-icons/fa";
import Login from './Login';
import "./Register.scss";
function Register() {
  return (
    <div className="container-fluid text-center">
    <div className="container-fluid"style={{ marginTop:"2%"}}>
    <h2 className="registers">Register for an account</h2>
      <h2 className="please" >PLEASE COMPLETE THE FORM BELOW TO REGISTER FOR A TRADE ACCOUNT</h2>
      <p style={{textAlign:"left", color:"black", marginTop:"2%", color:"black", fontWeight:"400", fontSize:"25px"}}>MY DETAILS</p>
      <hr style={{color:"black"}}/>
    <div className="form_wrapper">

  <div className="form_container">
    <div className="title_container">
      
    </div>
    <div className="row clearfix">
      <div className="">
        <form>
          <div className="input_field"> 
            <input type="text" name="Company Name" placeholder="Company Name" required />
          </div>
          <div className="input_field"> 
            <input type="text" name="Company Registretaion Number" placeholder="Company Registeration Number"  />
          </div>
          <div className="input_field"> 
            <input type="text" name="Company VAT Number" placeholder="Company VAT Number"  />
          </div>
          <div className="row clearfix">
          <div className="input_field select_option">
                <select>
                  <option>Select Customer Type</option>
                  <option>Wholesale</option>
                  <option>Garden Center</option>
                  <option>Internet Retailer</option>
                  <option>Retailer 1 Shops</option>
                  <option>Retailer 1-5 Shops</option>
                  <option>Retailer 6 Plus Shops</option>
                  <option>Trades Man</option>
                  <option>Hotels/Pubs/Clubs</option>
                  <option>Nursing Homes</option>
                  <option>School /Uni</option>
                  <option>Factory Shops</option>
                  <option>Garage</option>
                  <option>Market Traders</option>
                  <option>Charity</option>
                  <option>Others</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field select_option">
                <select>
                  <option>Select How did you find us?</option>
                  <option>Advert in Press</option>
                  <option>Trade Show</option>
                  <option>Word of mouth</option>
                  <option>Email</option>
                  <option>Other</option>
                  <option>Internet Search Engine</option>
                  
                </select>
                <div className="select_arrow"></div>
              </div>
         
          <div className="input_field"> 
            <textarea type="text" name="Company Registretaion Number" rows="5" style={{width:"99%"}} placeholder="Which product ranges are you interested in?"  />
          </div>
            
                      <input className="button" type="submit" value="Register" />
                      </div>
        </form>
      </div>
    </div>
  </div>
</div>
      <p style={{textAlign:"left", color:"black", marginTop:"2%", color:"black", fontWeight:"400", fontSize:"25px"}}>BILLING ADDRESS DETAILS</p>
      <hr style={{color:"black", border:"1px solid black"}} />
      <div style={{marginTop:"2%", width:"100%"}}>
      <Login />
      
      
</div>
  </div>
    </div>
  )
}

export default Register;
