import React from "react";
import "./login.css";
import Logo from "../../img/cg-logo.png";
import LoginCaurosel from "../../components/loginCaurosel/loginCaurosel";
import { CardGroup, Card } from "react-bootstrap";
import { BsEyeSlash } from "react-icons/bs";

const Login = () => {
  return (
    <div className="login-wrapper">
      <CardGroup>
        <Card className="login-carousal">
          <Card.Body className="p-0">
            <LoginCaurosel />
          </Card.Body>
        </Card>
        <Card className="login-form-wrapper">
          <Card.Body>
            <div className="logo d-flex justify-content-end">
              <img className="justify-content-end" src={Logo} alt="" />
            </div>
            <div className="login">
              <div className="login-head">
                <div className="login-text">
                  <h3 className="text-head">
                    Login your Account<span>!</span>
                  </h3>
                  <p className="text-secondary">Welcome to Casagrand</p>
                </div>
                <div className="form-style">
                  <form className="login-form">
                    <div className="form-group pb-3  ">
                      <label
                        className="text-label d-flex align-items-center fs-6 "
                        htmlFor=""
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                      />
                    </div>
                    <div className="form-group relative">
                      <label
                        className="d-flex align-items-center fs-6  "
                        htmlFor=""
                      >
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                      <div className="eye">
                        <BsEyeSlash className="eye-icon" />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <a className="forgot" href="#">
                          Forget Password?
                        </a>
                      </div>
                    </div>
                    <div className="sign-button">
                      <button type="submit" className="submit-button ">
                        Sign In
                      </button>
                    </div>
                  </form>

                  <div class="new-user">
                    A new User?{" "}
                    <a className="new-signin" href="#">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
    //     <div className="container-fluid">
    //   <div className="row  no-gutters shadow-lg">
    //     <div className="col-md-6 d-none d-md-block">
    //       <LoginCaurosel/>
    //       {/* <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" className="img-fluid"  /> */}
    //     </div>
    //     <div className="col-md-6 bg-white p-5">
    //       <div className='d-flex justify-content-end'>
    //         <img className='justify-content-end' src={Logo} alt="" />
    //       </div>
    //       <div>

    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
