import React from 'react'
import './login.css'
import Logo from "../../img/cg-logo.png";
import LoginCaurosel from '../../components/loginCaurosel/loginCaurosel';


const Login = () => {
  return (
    <div className="container-fluid">
  <div className="row  no-gutters shadow-lg">
    <div className="col-md-6 d-none d-md-block">
      <LoginCaurosel/>
      {/* <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" className="img-fluid"  /> */}
    </div>
    <div className="col-md-6 bg-white p-5">
      <div className='d-flex justify-content-end'>
        <img className='justify-content-end' src={Logo} alt="" />
      </div>
      <div>

      </div>
      <div className='login-head'>
        <div className="login-text">
      <h3 className="pb-3 d-flex justify-content-between">Login your Account</h3>
      <p className='text-secondary d-flex justify-content-between'>Welcome to Casagrand</p>
      </div>
      <div className="form-style">
        <form className='login-form'>
          
          <div className="form-group pb-3  ">
            <label className="d-flex align-items-center fs-6 fw-bold" htmlFor="">Email Address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="form-group pb-3">
          <label className="d-flex align-items-center fs-6 fw-bold" htmlFor="">Password</label>

            <input type="password"  className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
            <a href="#">Forget Password?</a></div>
          </div>
          <div className="sign-button">
            <button type="submit" className="btn btn-warning text-light  font-weight-bold mt-2">Sign In</button>
          </div>
        </form>
        
       
        <div class="new-user pt-4 text-center">
          A new User? <a href="#">Sign Up</a>
        </div>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Login