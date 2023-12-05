import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import "./Contact.css"
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
export default function ContactPage() {
    return (
        <>
            <Breadcrumbs />
            <div className="contact">
                <div className="container">
                    <div className="row" style={{ justifyContent: "center" }}>
                        <ContactForm />
                        {/* <ContactInfo /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
