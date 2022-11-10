import React from 'react'
import Logo1 from './Images/Logo.jpg'
function Login() {
  return (
    <>
        <section className="mainsection">
      <div className="loginform">
        <div className="top-image"><img src={Logo1}alt="" /></div>
        <h2 className="loginheading">Log In To ECOM BUDDY</h2>
        <div className="logintextfield">
          <div className="loginemail">
            <p className="text">Email</p>
            <input
              className="input"
              type="email"
              placeholder="Please enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </div>
          <div className="loginpassword">
            <p className="text">Password</p>
            <input
              className="input"
              type="password"
              placeholder="Please enter your password"
              required
            />
          </div>
          <a className="forgot" href="">Forgot password?</a>

          <div className="checkboxmain">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label className="form-check-label" for="flexCheckChecked">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <button id="button" type="button" className="btn btn-primary">Login</button>
        <div className="bottom-text">
          <p className="bottom-para">
            New to ECOM BUDDY? <a className="bottom-link" href="">Sign up now</a>
          </p>
          <p className="bottom-para">
            Problems or Questions? <a className="bottom-link" href="">Contact us</a>
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login