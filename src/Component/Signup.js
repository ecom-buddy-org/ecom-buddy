import React from 'react'
import "./signupstyle.css"
import Img3 from './Images/Signup_image.png'
export default function Signup() {
  return (
    <section class="main-section">
    <div class="section1">
      <div class="top-image"><img src="Logo.jpg" alt="" /></div>
      <h2 class="loginheading">Sign Up Now</h2>
      <div class="main-form">
        <div class="logintextfield">
          <div class="entername">
            <p class="text">Name</p>
            <input
              class="input"
              type="text"
              id="Name"
              placeholder="Enter your first and last name"
              pattern="[a-z]{4,10}"
              title="4 to 10 lowercase alphabets"
              required
            />
          </div>
          <div class="loginemail">
            <p class="text">Email</p>
            <input
              class="input"
              type="email"
              placeholder="This will be your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </div>
          <div class="loginpassword">
            <p class="text">Password</p>
            <input
              class="input"
              type="password"
              placeholder="Choose a strong password"
              required
            />
          </div>
          <ul class="list">
            <li>At least 8 characters</li>
            <li>A mixture of letters,numbers and special characters</li>
            <li>Cannot contain part of your email</li>
          </ul>

          <div class="checkboxmain">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                I agree with the <a href="">Privacy policy </a> and
                <a href="">Terms and conditions</a>
              </label>
            </div>
          </div>
        </div>
        <button id="button" type="button" class="btn btn-primary">
          Sign up
        </button>
        <div class="bottom-text">
          <p class="bottom-para">
            Already have an account? <a class="bottom-link" href="">Login</a>
          </p>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="section2-imagediv">
        <img id="section2-image" src={Img3} alt="" />
      </div>
      <div class="main-para">
        <p class="section2-para">
          Absolutely the best product on the market for dealing with anything
          as a seller on Amazon!!!
        </p>
        <p class="section2-para1">
          I can not think of anything else that your product could do expect
          sell the products for me! What is even more incredible about this
          product is the Freedom Ticket Training that you get for free with
          the purchase of your product!! Incredibly fantastic product and
          training!!!
        </p>
        <p class="section2-para2">Michael Mosely</p>
      </div>
    </div>
  </section>
  )
}
