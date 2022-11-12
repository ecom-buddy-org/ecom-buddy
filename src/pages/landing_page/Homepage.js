import React from 'react'
import "./homepagestyle.css"
import Navbar from "../../Component/navbar/Navbar";
import FeatureSection from "../../Component/featureSection/FeatureSection";
import Img1 from '../../Images/Home_title_image.jpeg'

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="Container">
        <div className="conn1">
          <div className="title">
            <h1 className="home_title">
              Everything you need to sell on amazon and more
            </h1>
            <h2 className="home_subtitle">
              Easily manage and grow a thriving e-commerce business with just one
              platform.
            </h2>
          </div>
          <form className="home_title_form" action="">
            <input
              className="input_email"
              type="text"
              placeholder="Enter your email-address"
              id="email"
              name="email"
            />
            <br />
            <button type="submit" className="btn">Sign up for free</button>
            <br />
            <span className="agree_text">
              <h5>
                By entering your email, you agree to receive marketing emails from
                EcomBuddy.
              </h5>
            </span>
          </form>
        </div>
        <div className="conn2">
          <img id="Image" src={Img1} alt="" />
        </div>
      </div>
      <div className="section_title">
        <h2>Everything for Your Business on Amazon</h2>
        <p>One of the Industry's First All-In-One Software for Amazon</p>
      </div>
      <FeatureSection />
    </>
  )
}

export default Homepage