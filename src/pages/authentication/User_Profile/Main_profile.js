import React from 'react'
import Profilestyle from "./profile.module.css"
<<<<<<< HEAD
import icon from '../../../Images/iconprofile.png'
=======
import Img1 from '../../../Images/iconprofile.png'

>>>>>>> 6d1c1c3dd6ff609cd9375f28a96bf5451f71acda
function Main_profile() {
  return (
    <>
      <body>
    <div className={Profilestyle.main_profile}>
      <div className={Profilestyle.sub_userprofile}>
        <div className={Profilestyle.profilepic}>
          <img className={Profilestyle.image} src={icon} alt="" />
          <a className={Profilestyle.link} href="">Edit Profile Photo</a>
        </div>
        <div className={Profilestyle.info}>
          <div className={Profilestyle.heading}>Credentials</div>
          <div className={Profilestyle.loginemail}>
            <div className={Profilestyle.text1}>
              <p className={Profilestyle.text}>Name</p>
            </div>
            <input
              className={Profilestyle.input}
              type="name"
              placeholder="Please enter your name"
              required
            />
          </div>
          <div className={Profilestyle.loginpassword}>
            <div className={Profilestyle.text2}>
              <p className={Profilestyle.text}>Email</p>
            </div>
            <input
              className={Profilestyle.input}
              type="email"
              placeholder="Please enter your email"
              required
            />
          </div>

          <div className={Profilestyle.heading}>Change Password</div>
          <div className={Profilestyle.loginemail}>
            <div className={Profilestyle.text3}>
              <p className={Profilestyle.text}>Old Password</p>
            </div>
            <input
              className={Profilestyle.input}
              type="password"
              placeholder="Please enter your old password"
              required
            />
          </div>

          <div className={Profilestyle.loginpassword}>
            <div className={Profilestyle.text4}>
              <p className={Profilestyle.text}>Change Password</p>
            </div>
            <input
              className={Profilestyle.input}
              type="password"
              placeholder="Please enter your password"
              required
            />
          </div>
          <div className={Profilestyle.loginpassword}>
            <div className={Profilestyle.text5}>
              <p className={Profilestyle.text}>New Password</p>
            </div>
            <input
              className={Profilestyle.input}
              type="password"
              placeholder="Please enter your new password"
              required
            />
          </div>
          <div className={Profilestyle.button}>
            <button type="submit" className={Profilestyle.btn1}>Update</button>
          </div>
        </div>
      </div>
    </div>
  </body>
    </>
  )
}

export default Main_profile