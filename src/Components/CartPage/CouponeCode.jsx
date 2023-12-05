import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setValid, use_Promo } from '../../redux/actions';

export default function CouponeCode() {
    const [promo, setpromo] = useState("");
    let dispatch = useDispatch()
    function handlerSubmit(e) {
        e.preventDefault()
        dispatch(use_Promo(promo))
    }
    let usage = useSelector(state => {
        return state.shop.promocodeUsage
    })
    useEffect(() => {
        dispatch(setValid())
    }, []);
    let valid = useSelector(state => {
        return state.shop.valid
    })
    function handlerChange(e) {
        setpromo(e.target.value)
    }
    return (
        <div className="col-lg-4">
            <div className="coupon">
                <div className="section_title">Coupon code</div>
                <div className="section_subtitle">Enter your coupon code</div>
                <div className="coupon_form_container">
                    <form onSubmit={(e) => handlerSubmit(e)} id="coupon_form" className="coupon_form">
                        <input type="text" disabled={usage} onChange={(e) => handlerChange(e)} value={promo} className="coupon_input" required="required" />
                        <button className="button coupon_button" disabled={usage} onClick={(e) => handlerSubmit(e)}><span>Apply</span></button>
                    </form>
                    {
                        valid == 0 ? <></> : <div style={{ display: "flex", justifyContent: "end" }}>
                            {
                                valid == 1 ? <div className={valid == 1 ? 'activated' : "none"}> activated  <i className="fa fa-check" aria-hidden="true"></i></div> : <></>

                            }
                            {
                                valid == 2 ? <div className={valid == 2 ? 'invalid' : "none"}> invalid promocode <i className="fa fa-times" aria-hidden="true"></i>
                                </div> : <></>
                            }
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
