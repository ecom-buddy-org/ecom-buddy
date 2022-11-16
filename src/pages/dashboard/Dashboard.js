import React from 'react'
import DashboardStyle from "./dashboardstyle.module.css"
import Navbar from '../../Component/Navbar'
function Dashboard() {
    return (
        <>
            <Navbar />
                <div className={DashboardStyle.text}>
                    <p className={DashboardStyle.text1}>Welcome!!</p>
                </div>
                <div className={DashboardStyle.container3}>
                    <div className={DashboardStyle.con1}>
                        <div className={DashboardStyle.tool_head}>
                            <div className={DashboardStyle.tool_icon}>
                                <i className="fa-solid fa-key"></i>
                            </div>
                            <a href="" className={DashboardStyle.tool_head_text}>
                                <span >Keyword Tracker</span>
                                <span className={DashboardStyle.text2}>Product Rank Tracking</span>
                            </a>
                        </div>
                        <div className={DashboardStyle.tool_body}>Keep track of the changes and visualize how each change affects product listings
                            rank for given keywords.</div>
                    </div>
                    <div className={DashboardStyle.con2}>
                        <div className={DashboardStyle.con1}>
                            <div className={DashboardStyle.tool_head}>
                                <div className={DashboardStyle.tool_icon}>
                                    <i className="fa-solid fa-scroll"></i>
                                </div>
                                <a href="" className={DashboardStyle.tool_head_text}>
                                    <span id="text1">Index Checker</span>
                                    <span className={DashboardStyle.text2}>Keyword Index Checker</span>
                                </a>
                            </div>
                            <div className={DashboardStyle.tool_body}>
                                Figure out which of your back-end and front-end keyword search terms are being indexed
                                by Amazon and which ones are not.</div>
                        </div>
                    </div>
                    <div className={DashboardStyle.con3}>
                        <div className={DashboardStyle.con1}>
                            <div className={DashboardStyle.tool_head}>
                                <div className={DashboardStyle.tool_icon}>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <a href="" className={DashboardStyle.tool_head_text}>
                                    <span id="text1">Scribbles</span>
                                    <span className={DashboardStyle.text2}>Listing Optimizer</span>
                                </a>
                            </div>
                            <div className={DashboardStyle.tool_body}>
                                Never miss out on using any valuable keywords when writing fully optimized titles,
                                bullet points, descriptions, and backend search term keywords.</div>
                        </div>
                    </div>
                    <div className={DashboardStyle.con4}>
                        <div className={DashboardStyle.con1}>
                            <div className={DashboardStyle.tool_head}>
                                <div className={DashboardStyle.tool_icon}>
                                    <i className="fa-solid fa-box"></i>
                                </div>
                                <a href="" className={DashboardStyle.tool_head_text}>
                                    <span id="text1">BlackBox</span>
                                    <span className={DashboardStyle.text2}>Amazon Product Research</span>
                                </a>
                            </div>
                            <div className={DashboardStyle.tool_body}>
                                Save time and energy researching every niche in existence on Amazon to find your next
                                perfect product to sell—use Black Box to get results in seconds!</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard