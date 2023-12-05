import React, { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { cartTotal, use_Promo } from '../../redux/actions'
import Cart from './Cart'
import "./Cart.css"
import CartBreadcrumbs from './CartBreadcrumbs'
import CartTotal from './CartTotal'
import CouponeCode from './CouponeCode'
export default function CartPage() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(cartTotal(0))
    }, []);
    const cookies = new Cookies();
    return (

        <>
            <CartBreadcrumbs />
            <div className="cart_info">
                <div className="container">
                    <Cart />
                    <div className="row row_extra">
                        <CouponeCode />
                        <CartTotal />
                    </div>
                </div>
            </div>
        </>
    )
}
