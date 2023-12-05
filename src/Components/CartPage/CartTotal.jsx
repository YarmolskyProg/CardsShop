import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSum } from '../../redux/actions'

export default function CartTotal() {

    let dispatch = useDispatch()
    let total = useSelector(state => {
        return state.shop.cartTotal
    })
    function handlerClick() {
        dispatch(setSum(total))
    }
    return (
        <div className="col-lg-6 offset-lg-2">
            <div className="cart_total">
                <div className="section_title">Cart total</div>
                <div className="section_subtitle">Final info</div>
                <div className="cart_total_container">
                    <ul>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                            <div className="cart_total_title">Total</div>
                            <div className="cart_total_value ml-auto">${isNaN(total) ? 0 : total}</div>
                        </li>
                    </ul>
                </div>
                {
                    total == 0 || total == undefined ?
                        <div className="button checkout_button disabled"><Link >Proceed to checkout</Link></div> :
                        <div className="button checkout_button" onClick={() => handlerClick()} ><Link to="/payment">Proceed to checkout</Link></div>
                }

            </div>
        </div>
    )
}
