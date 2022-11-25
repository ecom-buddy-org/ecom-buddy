import React, { useState } from 'react'
import AlertDialog from '../../../Component/AlertDialog';
import Navbar from '../../../Component/navbar/Navbar'
import Style from "./blackbox.module.css"
import { useNavigate } from "react-router-dom";

export default function Blackbox() {
    const navigate = useNavigate();

    const [domain, setDomain] = useState("www.amazon.com");
    const [url, setURL] = useState("");
    const [asin, setAsin] = useState("");
    const [pages, setPages] = useState("");

    const [dialogDescription, setDialogDescription] = useState("");

    const [alertdialog, setAlertDialog] = useState(false);

    const openDialog = () => {
        setAlertDialog(true);
    };

    const closeDialog = () => {
        setAlertDialog(false);
    };

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    };

    const updateUrlField = (event) => {
        setURL(event.target.value)
    };

    const updateASINField = (event) => {
        setAsin(event.target.value)
    };

    const updatePagesField = (event) => {
        setPages(event.target.value)
    };

    return (
        <>
            <AlertDialog
                description={dialogDescription}
                open={alertdialog}
                onClose={closeDialog} />
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
                        <select value={domain} onChange={handleDomainChange}
                            name="subject"
                            className={Style.select}>
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
                            <div className={Style.Min_Max}>
                                <div className={Style.Subheading1}>
                                    URL
                                </div>
                                <br />
                                <div className={Style.Min_text}>
                                    <input type="text" className={Style.Max} onChange={updateUrlField} placeholder="Provide URL *" />
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
                                <input type="text" className={Style.Max} onChange={updateASINField} placeholder="Provide ASIN *" />
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
                                <input type="text" className={Style.Max} onChange={updatePagesField} placeholder="Enter pages *" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.button}>
                    <button type="submit" className={Style.btn2} onClick={() => processSubmit()}>Submit</button>
                </div>
            </div>
        </>
    );

    function processSubmit() {
        console.log("Submit clicked:");
        console.log(`Value from dropdown is: ${domain}`);
        console.log('Your url value is: ' + url);
        console.log('Your pages value is: ' + pages);
        console.log('Your asin value is: ' + asin);
        if (url === "") {
            setDialogDescription("URL must not be empty. Fill the field and try again.Fields with * are all required");
            openDialog();
        } else if (asin === "") {
            setDialogDescription("ASIN must not be empty. Fill the field and try again.Fields with * are all required");
            openDialog();
        } else if (pages === "") {
            setDialogDescription("Pages must not be empty. Fill the field and try again.Fields with * are all required");
            openDialog();
        } else {
            var data = {
                domain: domain,
                url: url,
                asin: asin,
                pages: pages
            };

            navigate('/Product', { state: data });
        }
    }
}