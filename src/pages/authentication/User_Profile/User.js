import React from 'react'
import Userstyle from "./user.module.css"
import Img1 from '../../../Images/En.png'

function User() {
    return (
        <>
            <div className={Userstyle.main_userprofile}>
                <div className={Userstyle.sub_userprofile}>
                    <div className={Userstyle.sub_box}>
                        <div className={Userstyle.Image1}>
                            <img className={Userstyle.Image} id={Image.id} src={Img1} alt="" />
                        </div>
                        <p className={Userstyle.para1}>Check Email</p>
                        <br />
                        <p className={Userstyle.para2}>Please Check your email inbox and click on the provided link to reset your password.If
                            you don't receive email,<a href=''>Click here to resend</a>
                        </p>
                        <br />
                        <a href='' className={Userstyle.Back}>Back to Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User