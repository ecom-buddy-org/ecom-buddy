import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from '../../Images/Logo.jpg'
import { useNavigate } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const history = useNavigate();

  function navigateTo(route) {
    console.log("Navigate to ", route);
    history(`/${route}`);

  }

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background: "#fff",
          }}
        >
          <Toolbar>
            <div className="navbar-container">
              <div className="navbar">
                <div className="logo-links-container">
                  <div className="logo">
                    <img src={Logo} alt="logo" className="navbar-logo" />
                  </div>
                  <div className="desktop-navbar-links">
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#black_box">Black box</a>
                      </li>
                      <li>
                        <a href="#product_listing">Product Listing</a>
                      </li>
                      <li>
                        <a href="#contact_us">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-btns">
                  <button className="signup-btn" onClick={() => navigateTo("signup")}>Sign up for free</button>
                  <button className="login-btn" onClick={() => navigateTo("login")}>Login</button>
                </div>
              </div>
              <div className="mobile-navbar-links">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#black_box">Black box</a>
                  </li>
                  <li>
                    <a href="#product_listing">Product Listing</a>
                  </li>
                  <li>
                    <a href="#contact_us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default Navbar;
