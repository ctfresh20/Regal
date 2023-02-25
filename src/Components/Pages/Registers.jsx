import React from 'react';

import "./Registers.css";
import Recaptcha from "react-recaptcha";
function Registers() {
  return (
    <div>
     <div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2 mt-5 fancy-forms">
				 
						<ul className="nav nav-tabs  mt-3" id="myTab" role="tablist">
	                        <li className="nav-item">
	                            <a className="nav-link active" id="login" data-mdb-toggle="tab" href="#login_form" role="tab" aria-controls="login" aria-selected="true">Login</a>
	                        </li>
	                        <li className="nav-item">
	                            <a className="nav-link" id="signup" data-mdb-toggle="tab" href="#signup_form" role="tab" aria-controls="signup" aria-selected="false">SignUp</a>
	                        </li>
                    	</ul>
                    	<div className="tab-content" id="myTabContent">
                        	<div className="tab-pane fade show active" id="login_form" role="tabpanel" aria-labelledby="login">
	                            <div className="fancyformcontainer">
	                            	<h3 className="text-center">Login</h3>
									<form>
									    <div className="form-group mt-4">
									        <label for="email_id">Email address</label>
									        <input type="email" className="form-control" id="email_id" placeholder="Enter valid email address" />
									    </div>
									    <div className="form-group mt-4">
									        <label for="password">Password</label>
									        <input type="password" className="form-control" id="password" placeholder="Please provide password" />
									    </div>
									    <div className="text-center">
					    					<button type="submit" className="btn formsubmitbtn">Submit</button>
					    				</div>
				  					</form>
				 				</div>
                       		</div>
	                        <div className="tab-pane fade" id="signup_form" role="tabpanel" aria-labelledby="signup">
	                            <div className="fancyformcontainer">
	                            	<h3 className="text-center">Sign Up</h3>
									<form>
									    <div className="form-group mt-4">
									        <label for="email_id">Email address</label>
									        <input type="email" className="form-control" id="email_id" placeholder="Enter valid email address "/>
									    </div>
									    <div className="form-group mt-4">
									        <label for="password">Password</label>
									        <input type="password" className="form-control" id="password" placeholder="Please provide password" />
									    </div>
									    <div className="form-group mt-4">
									        <label for="password">Confirm Password</label>
									        <input type="password" className="form-control" id="confirm password" placeholder="Confirm Password" />
									    </div>
									    <div className="text-center">
					    					<button type="submit" className="btn formsubmitbtn">Submit</button>
					    				</div>
				  					</form>
				 				</div>
	                        </div>
                    	</div>

				</div>
			</div>
		</div>
    </div>
  )
}

export default Registers;
