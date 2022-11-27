import React from "react";
import style from "./forgetPassword.module.scss";
import ForgotIllus from "../../../Images/forgetPassIllus.jpg";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  const {
    wrapper,
    card,
    illusHolder,
    headerHolder,
    contentHolder,
    buttonHolder,
  } = style;

  return (
    <div className={wrapper}>
      <div className={card}>
        <div className={illusHolder}>
          <img src={ForgotIllus} alt="Recover password" />
        </div>
        <div className={headerHolder}>
          <h3>Forgot password?</h3>
          <p>
            Enter your email and we will send you instructions on your
            email-address
          </p>
        </div>
        <div className={contentHolder}>
          <input type="email" placeholder="Enter email-address" />
          <div className={buttonHolder}>
            <button>Send Instructions</button>
          </div>
          <Link to="/login">
            <p>Back to login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
