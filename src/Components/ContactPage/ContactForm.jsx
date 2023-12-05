import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactForm() {
    const navigate = useNavigate()


    function handlerSubmit(e) {
        e.preventDefault()
        navigate(0)
    }
    return (
        <div className="col-lg-8 contact_col">
            <div className="get_in_touch">
                <div className="section_title">Get in Touch</div>
                <div className="contact_form_container">
                    <form className="contact_form" onSubmit={(e) => handlerSubmit(e)}>
                        <div className="row">
                            <div className="col-xl-6">
                                <label htmlFor="contact_name">First Name*</label>
                                <input type="text" id="contact_name" className="contact_input" required="required" />
                            </div>
                            <div className="col-xl-6 last_name_col">

                                <label htmlFor="contact_last_name">Last Name*</label>
                                <input type="text" id="contact_last_name" className="contact_input" required="required" />
                            </div>
                        </div>
                        <div>

                            <label htmlFor="contact_company">Subject</label>
                            <input type="text" id="contact_company" className="contact_input" />
                        </div>
                        <div>

                            <label htmlFor="contact_company">Email*</label>
                            <input type="email" id="contact_company" className="contact_input" required="required" />
                        </div>
                        <div>
                            <label htmlFor="contact_textarea">Message*</label>
                            <textarea id="contact_textarea" className="contact_input contact_textarea" required="required"></textarea>
                        </div>
                        <button className="button contact_button"><span>Send Message</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
