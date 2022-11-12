import React from 'react'
import SignupStyle from "./signupstyle.module.css"
import Img3 from '../../../Images/Signup_image.png'
import EcomBuddyLogo from '../../../Images/Logo.jpg'
export default function Signup() {
  return (
    <section className={SignupStyle.main_section}>
      <div className={SignupStyle.section1}>
        <div className={SignupStyle.top_image}><img src={EcomBuddyLogo} alt="" /></div>
        <h2 className={SignupStyle.loginheading}>Sign Up to EcomBuddy</h2>
        <div className={SignupStyle.main_form}>
          <div className={SignupStyle.logintextfield}>
            <div className={SignupStyle.entername}>
              <p className={SignupStyle.text}>Name</p>
              <input
                className={SignupStyle.input}
                type="text"
                id="Name"
                placeholder="First and last name"
                pattern="[a-z]{4,10}"
                title="4 to 10 lowercase alphabets"
                required
              />
            </div>
            <div className={SignupStyle.loginemail}>
              <p className={SignupStyle.text}>Email</p>
              <input
                className={SignupStyle.input}
                type="email"
                placeholder="This will be your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>
            <div className={SignupStyle.loginpassword}>
              <p className={SignupStyle.text}>Password</p>
              <input
                className={SignupStyle.input}
                type="password"
                placeholder="Choose a strong password"
                required
              />
            </div>
            <ul className={SignupStyle.list}>
              <li>At least 8 characters</li>
              <li>A mixture of letters,numbers and special characters</li>
              <li>Cannot contain part of your email</li>
            </ul>
            <div className={SignupStyle.checkboxmain}>
              <div className={SignupStyle.form_check}>
                <input
                  className={SignupStyle.form_check_input}
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className={SignupStyle.form_check_label} for="flexCheckChecked">
                  I agree with the <a href="#">Privacy policy</a> and
                  <a href="#"> Terms and conditions</a>
                </label>
              </div>
            </div>
          </div>
          <button id="button" type="button" className={`${SignupStyle.btn_primary}`}>
            Sign up
          </button>
          <div className={SignupStyle.bottom_text}>
            <p className={SignupStyle.bottom_para}>
              Already have an account? <a className={SignupStyle.bottom_link} href="">Login</a>
            </p>
          </div>
        </div>
      </div>
      <div className={SignupStyle.section2}>
        <div className={SignupStyle.section2_imagediv}>
          <img className={SignupStyle.section2_image} src={Img3} alt="" />
        </div>
        <div className={SignupStyle.main_para}>
          <p className={SignupStyle.section2_para}>
            Absolutely the best product on the market for dealing with anything
            as a seller on Amazon!!!
          </p>
          <p className={SignupStyle.section2_para1}>
            I can not think of anything else that your product could do expect
            sell the products for me! What is even more incredible about this
            product is the Freedom Ticket Training that you get for free with
            the purchase of your product!! Incredibly fantastic product and
            training!!!
          </p>
          <p className={SignupStyle.section2_para2}>Michael Mosely</p>
        </div>
      </div>
    </section >
  )
}
