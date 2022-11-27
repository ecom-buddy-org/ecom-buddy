import React from "react";
import style from "./profile.module.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import Img1 from "../../../Images/12.jpg";

function Main_profile() {
  const {
    wrapper,
    userCard,
    imageCard,
    userImage,
    userImageHolder,
    userTextInfoHolder,
    imageTopCornerButton,
    profileFields,
    profileField,
  } = style;
  return (
    <div className={wrapper}>
      <div className={`${userCard} ${imageCard}`}>
        <div className={userImageHolder}>
          <img src={Img1} className={userImage} alt="" />
          {<PhotoSizeSelectActualIcon className={imageTopCornerButton} />}
        </div>
        <div className={userTextInfoHolder}>
          <h1>Muhammad adil mehmood</h1>
          <p>iamadilmalick@gmail.com</p>
          <div>
            <button>Update image</button>
          </div>
        </div>
      </div>
      <div className={userCard}>
        <h1>Update profile information</h1>
        <p>
          Easily update your personal details including name, email address and
          password. make sure to click press update button to get your
          information updated.
        </p>
        <div className={profileFields}>
          <div>
            <h4>Name</h4>
            <input
              className={profileField}
              type="text"
              placeholder="Muhammad Adil Mehmood"
            />
          </div>
          <div>
            <h4>Password</h4>
            <input className={profileField} type="password" />
          </div>
          <div>
            <h4>Confirm Password</h4>
            <input className={profileField} type="password" />
          </div>
        </div>
        <div>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Main_profile;
