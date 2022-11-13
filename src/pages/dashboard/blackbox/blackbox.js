import React from 'react'
import Navbar from '../../../Component/navbar/Navbar'
import Style from "./blackbox.module.css"

function Blackbox() {
    return (
        <>
            <Navbar />
            <div className={Style.top_head}>
                <p className={Style.head1}>Black Box</p>
                <p className={Style.head2}>
                    Find a product to sell by evaluating products, keywords, competitors and
                    more
                </p>
            </div>
            <br />
            <div className={Style.line1}></div>
            <br />
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
                <br />
            </div>
            <div className={Style.main_form}>
                <div className={Style.Product}>
                    <div className={Style.heading1}>
                        Product
                    </div>
                    <br />
                    <div className={Style.Searcharea1}>
                        <div className={Style.Subheading1}>
                            Category & Subcategory
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                       256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                       208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                       200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                        384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                         32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <div className={Style.textarea1}>
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
                        <div className={Style.line}></div>
                    </div>
                    <br />
                    <div className={Style.Min_Max}>
                        <div className={Style.Subheading1}>
                            Review Count
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                       256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                       208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                       200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                        384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                         32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br />
                    </div>
                    <br />
                    <div className={Style.Min_Max}>
                        <div className={Style.Subheading1}>
                            Review Rating
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                       256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                       208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                       200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                        384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                         32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br />
                    </div>
                    <br />
                    <div className={Style.Min_Max}>
                        <div className={Style.Subheading1}>
                            Best Seller Rank (BSR)
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                       256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                       208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                       200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                        384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                         32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                    </div>
                    <br /><br />
                    <div className={Style.line}></div>
                </div>
                <br /><br />
                <div className={Style.Competitors}>
                    <div className={Style.heading1}>
                        Competitors
                    </div>
                    <br />
                    <div className={Style.Searcharea1}>
                        <div className={Style.Subheading1}>
                            Number of Sellers
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                                256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                                208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                                200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                                384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                                32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br /><br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                    </div>
                    <br /><br />
                    <div className={Style.line}></div>
                    <br /><br />
                    <div className={Style.Subheading1}>
                        Exact Br/and Search
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                            className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                            256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                            208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                            200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                            384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                            32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                        </svg>
                    </div>
                    <br />
                    <input type="text" className={Style.Brand_search} placeholder="Ex : Apple" />
                    <br /><br />
                    <div className={Style.Subheading1}>
                        Exact Seller Search
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                            className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                            256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                            208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                            200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                            384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                            32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                        </svg>
                    </div>
                    <br />
                    <input type="text" className={Style.Brand_search} placeholder="Ex : Apple" />
                    <br /><br />
                    <div className={Style.line}></div>
                </div>
                <br /><br />
                <div className={Style.Sales}>
                    <div className={Style.heading1}>
                        Sales
                    </div>
                    <br />
                    <div className={Style.Searcharea1}>
                        <div className={Style.Subheading1}>
                            Price
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                       256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                       208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                       200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                        384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                         32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br /><br />
                        <div className={Style.line}></div>
                        <br /><br />
                        <div className={Style.Subheading1}>
                            Monthly Revenue
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                                256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                                208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                                200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                                384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                                32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br />
                        <div className={Style.Subheading1}>
                            Sales Change (%)
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                                256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                                208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                                200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                                384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                                32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br />
                        <br />
                        <div className={Style.Subheading1}>
                            Monthly Sales (units)
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                                256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                                208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                                200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                                384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                                32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br />
                        <br />
                        <div className={Style.Subheading1}>
                            Sales Year over Year
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                                256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                                208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                                200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                                384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                                32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br />
                        <br />
                        <div className={Style.Subheading1}>
                            Price Change (%)
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info"
                                className={`svg-inline--fa fa-circle-info sc-ewSTlh ${Style.cPjDGa}`} role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                                256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 
                                208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 
                                200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216
                                384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33
                                32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"></path>
                            </svg>
                        </div>
                        <br />
                        <div className={Style.Min_text}>
                            <input type="text" className={Style.Min} placeholder="Min" />
                            <input type="text" className={Style.Max} placeholder="Max" />
                        </div>
                        <br /><br />
                        <div className={Style.line}></div>
                    </div>
                </div>
            </div>
            <div className={Style.button}>
                <button type="submit" className={Style.btn1}>Clear</button>
                <button type="submit" className={Style.btn2}>Submit</button>
            </div>
        </>
    )
}

export default Blackbox