import React from 'react'
import { Cookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartTotal, clearCart } from '../../redux/actions'
import SingleCartItem from './SingleCartItem'
// import "./Cart.css"
export default function Cart() {
    const cookies = new Cookies();
    let dispatch = useDispatch()
    function handlerClick() {
        dispatch(clearCart())
        dispatch(cartTotal())
    }
    let cart = useSelector(state => {
        return JSON.parse(localStorage.getItem('cart')) ? JSON.parse([localStorage.getItem('cart')]) : []
    })

    // let cart = cookies.get('cart')
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="cart_info_columns clearfix">
                        <div className="cart_info_col cart_info_col_product">Product</div>
                        <div className="cart_info_col cart_info_col_price">Price</div>
                        <div className="cart_info_col cart_info_col_quantity">Quantity</div>
                        <div className="cart_info_col cart_info_col_total">Total</div>
                    </div>
                </div>
            </div>

            <div className="row cart_items_row">
                <div className="col">
                    {
                        cart &&
                        cart.map((res, index) => {
                            return <SingleCartItem key={index} product={res} />
                        })
                    }

                </div>
            </div>
            <div className="row row_cart_buttons">
                <div className="col">
                    <div className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                        <div className="button continue_shopping_button"><Link to="/shop">Continue shopping</Link></div>
                        <div className="cart_buttons_right ml-lg-auto">
                            <div className="button clear_cart_button" onClick={() => handlerClick()}><Link>Clear cart</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
