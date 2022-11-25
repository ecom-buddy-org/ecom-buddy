import React from 'react'
import confirm from "./Login_confirm.module.css"
import Img1 from '../../../Images/emailimg.png'
function Login_confirmation() {
  return (
    <>
      <div className={confirm.main_userprofile}>
        <div className={confirm.sub_userprofile}>
          <div className={confirm.sub_box}>
            <div className={confirm.half_box}>
              <img className={confirm.Image} src={Img1} alt="" />
              <div className={confirm.loginemail}>
                <div className={confirm.text1}>
                  <p className={confirm.text}>Name</p>
                </div>
                <input
                  className={confirm.input}
                  type="name"
                  placeholder="Please enter your name"
                  required
                />
              </div>
              <div className={confirm.loginpassword}>
                <div className={confirm.text2}>
                  <p className={confirm.text}>Email</p>
                </div>
                <input
                  className={confirm.input}
                  type="email"
                  placeholder="Please enter your email"
                  required
                />
              </div>
              <div className={confirm.button}>
                <button type="submit" className={confirm.btn1}>submit</button>
              </div>
            </div>
            <div className={confirm.round_box}>
              <div className={confirm.semi_box}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login_confirmation