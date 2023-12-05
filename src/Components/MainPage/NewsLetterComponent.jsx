import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewsLetterComponent() {
    const navigate = useNavigate()


    function handlerSubmit(e) {
        e.preventDefault()
        navigate(0)
    }
    return (
        <div className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="newsletter_border"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="newsletter_content text-center">
                            <div className="newsletter_title">Subscribe to our newsletter</div>
                            <div className="newsletter_text"><p>Receive e-mails about discounts, coupons, new products</p></div>
                            <div className="newsletter_form_container">
                                <form className="newsletter_form" onSubmit={(e) => handlerSubmit(e)} >
                                    <input type="email" className="newsletter_input" required="required" />
                                    <button className="newsletter_button trans_200"><span>Subscribe</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
