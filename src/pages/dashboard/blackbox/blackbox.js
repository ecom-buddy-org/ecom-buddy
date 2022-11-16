import React from 'react'
import Navbar from '../../../Component/navbar/Navbar'
import Style from "./blackbox.module.css"

function Blackbox() {
    return (
        <>
            <Navbar />
            <div>
                <p className={Style.head1}>Black Box</p>
                <p className={Style.head2}>
                    Find a product to sell by evaluating products, keywords, competitors and
                    more
                </p>
            </div>
            <div className={Style.card}>
                <div className={Style.sub_head}>
                    <p>
                        Find products on
                        <select name="subject" className={Style.select}>
                            <option className={Style.option} value="">www.amazon.com</option>
                            <option className={Style.option}>www.amazon.com</option>
                            <option className={Style.option}>www.amazon.ca</option>
                            <option className={Style.option}>www.amazon.de</option>
                        </select>
                        that match your criteria
                    </p>
                </div>
                <br />
                <div className={Style.main_form}>
                    <div className={Style.div_30}>
                        <div>
                            <div className={Style.Subheading1}>
                                Domain
                            </div>
                            <br />
                            <div>
                                <h2 className={Style.text}>
                                    <select name="subject" id="subject" className={Style.select}>
                                        <option value="">Select one or more categories & subcategories</option>
                                        <option value="Appliances">Appliances</option>
                                        <option value="Arts, Crafts & Sewing">Arts, Crafts & Sewing</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="Baby Products">Baby Products</option>
                                        <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                        <option value="Books">Books</option>
                                    </select>
                                </h2>
                            </div>
                        </div>
                        <br /><br />
                        <div>
                            <div className={Style.Min_Max}>
                                <div className={Style.Subheading1}>
                                    Best Seller Rank (BSR)
                                </div>
                                <br />
                                <div className={Style.Min_text}>
                                    <input type="text" className={Style.Max} placeholder="Max" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className={Style.div_30}>
                        <div>
                            <div className={Style.Subheading1}>
                                ASIN
                            </div>
                            <br />
                            <div className={Style.Min_text}>
                                <input type="text" className={Style.Max} placeholder="ASIN" />
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className={Style.div_30}>
                        <div className={Style.Searcharea1}>
                            <div className={Style.Subheading1}>
                                Pages
                            </div>
                            <br />
                            <div className={Style.Min_text}>
                                <input type="text" className={Style.Max} placeholder="Max" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.button}>
                    <button type="submit" className={Style.btn2}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Blackbox