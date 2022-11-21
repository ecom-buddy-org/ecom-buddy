import React from 'react'
import Logo1 from '../../../Images/Logo.png'
import LoginStyle from './login.module.css';

function Login() {
  return (
    <>
      <section className={LoginStyle.mainsection}>
        <div className={LoginStyle.loginform}>
          <div className={LoginStyle.top_image}><img src={Logo1} alt="" /></div>
          <h2 className={LoginStyle.loginheading}>Sign Up to EcomBuddy</h2>
          <div className={LoginStyle.main_form}>
            <div className={LoginStyle.logintextfield}>
              <div className={LoginStyle.loginemail}>
                <p className={LoginStyle.text}>Email</p>
                <input
                  className={LoginStyle.input}
                  type="email"
                  placeholder="This will be your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
              </div>
              <div className={LoginStyle.loginpassword}>
                <p className={LoginStyle.text}>Password</p>
                <input
                  className={LoginStyle.input}
                  type="password"
                  placeholder="Choose a strong password"
                  required
                />
              </div>
            </div>
            <button id="button" type="button" className={`${LoginStyle.btn_primary}`}>
              Sign up
            </button>
            <div className={LoginStyle.bottom_text}>
              <p className={LoginStyle.bottom_para}>
                Don't have an account? <a className={LoginStyle.bottom_link} href="">Register now</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login