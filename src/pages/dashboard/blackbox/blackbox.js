import React, { useState } from 'react'
import AlertDialog from '../../../Component/AlertDialog';
import Style from "./blackbox.module.css"
import { useNavigate } from "react-router-dom";

export default function Blackbox() {
    const { heading, subHeading, card, wrapper, mainSubHeading, dropDownDomain, cardHeader, cardForm, field, fieldTitle, fieldInput, formButton, formActions } = Style;
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [inputFieldsWithText, setInputFieldsWithText] = useState([
        {
            title: "URL",
            hint: "Provide URL *",
            name: "url",
        },
        {
            title: "ASIN",
            hint: "Provide ASIN *",
            name: "asin",
        },
        {
            title: "Pages",
            hint: "Provide Pages *",
            name: "pages",
        }
    ]);
    const [domain, setDomain] = useState("www.amazon.com");
    const [dialogDescription, setDialogDescription] = useState("");
    const [alertdialog, setAlertDialog] = useState(false);

    const openDialog = () => {
        setAlertDialog(true);
    };

    const closeDialog = () => {
        setAlertDialog(false);
    };

    function handleForm(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    } 
      
    function s(e) {
        e.preventDefault();

        if (inputs.url === "") {
            setDialogDescription("URL must not be empty. Fill the field and try again.Fields with * are all required");
            openDialog();
        } else if (inputs.asin === "") {
            setDialogDescription("ASIN must not be empty. Fill the field and try again.Fields with * are all required");
            openDialog();
        } else if (inputs.pages === "") {
            setDialogDescription("Pages must not be empty. Fill the field and try again.Fields with * are all required");
            openDialog();
        } else {
            var data = {
                domain: domain,
                url: inputs.url,
                asin: inputs.asin,
                pages: inputs.pages
            };

            // console.log(data);
            navigate('/Product', { state: data });
        }
    } 

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    };

    return (
        <div className={wrapper}>
            
            <AlertDialog
                description={dialogDescription}
                open={alertdialog}
                onClose={closeDialog} />
            
            <div>
                <p className={heading}>Black Box</p>
                <p className={subHeading}>
                    Find a product to sell by evaluating products, keywords, competitors and
                    more
                </p>
            </div>
            <div className={card}>
                <div class={cardHeader}>
                    <p className={mainSubHeading}>Find products on</p>
                    <select className={dropDownDomain} value={domain} onChange={handleDomainChange}
                            name="subject">
                            <option value="">www.amazon.com</option>
                            <option>www.amazon.com</option>
                            <option >www.amazon.ca</option>
                            <option>www.amazon.de</option>
                    </select>
                    <p className={mainSubHeading}>that match your criteria</p>
                </div>
                <form className={cardForm} onSubmit={e => s(e)}>
                {inputFieldsWithText.map(element => {
                            return displayField(element);
                    })}
                <div class={formActions}>
                    <button className={formButton} type="submit">Submit</button>
                </div>
                </form>
            </div>
        </div>
    );

    function displayField(element) {
        return <div className={field}>
            <p className={fieldTitle}>{element.title}</p>
            <input className={fieldInput} type="text" name={element.name} required value={(element.name === "url") ? inputs.url : (element.name === "asin") ? inputs.asin : (element.name === "pages") ? inputs.pages : ""} onChange={e=>handleForm(e)} placeholder={element.hint} />
            </div>
    }
}