import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartTotal, changeQty, setCurrent } from '../../redux/actions';

export default function SingleCartItem({ product }) {
    let dispatch = useDispatch()

    function handlerChangeUp() {
        dispatch(changeQty(product, product.qty, 0))
        dispatch(cartTotal())
    }
    function handlerChangeDown() {
        dispatch(changeQty(product, product.qty, 1))
        dispatch(cartTotal(product))
    }
    function handlerClick() {
        dispatch(setCurrent(product.product))
    }

    return (
        <>
            <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                    <div className="cart_item_image">
                        <div><img src={product.product.img} alt="" /></div>
                    </div>
                    <div className="cart_item_name_container" onClick={() => handlerClick()}>
                        <div className="cart_item_name"><Link to="/product">{product.product.name}</Link></div>
                    </div>
                </div>
                <div className="cart_item_price">${product.product.price}</div>
                {
                    window.innerWidth < 991 ?
                        <div className='wpr'>
                            <div className="cart_item_quantity">
                                <div className="product_quantity_container" style={{ marginTop: "0px" }}>
                                    <div className="product_quantity clearfix">
                                        <span>Qty</span>
                                        <input id="quantity_input" type="number" min="1" pattern="[0-9]*" onChange={() => handlerChangeUp} value={product.qty} />
                                        <div className="quantity_buttons">
                                            <div id="quantity_inc_button" onClick={() => handlerChangeUp()} className="quantity_inc quantity_control">
                                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                            </div>
                                            <div id="quantity_dec_button" onClick={() => handlerChangeDown()} className="quantity_dec quantity_control">
                                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_item_total">${product.product.price * product.qty}</div>
                        </div> :
                        <>
                            <div className="cart_item_quantity">
                                <div className="product_quantity_container" style={{ marginTop: "0px" }}>
                                    <div className="product_quantity clearfix">
                                        <span>Qty</span>
                                        <input id="quantity_input" type="number" min="1" pattern="[0-9]*" onChange={() => handlerChangeUp} value={product.qty} />
                                        <div className="quantity_buttons">
                                            <div id="quantity_inc_button" onClick={() => handlerChangeUp()} className="quantity_inc quantity_control">
                                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                            </div>
                                            <div id="quantity_dec_button" onClick={() => handlerChangeDown()} className="quantity_dec quantity_control">
                                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_item_total">${product.product.price * product.qty}</div>
                        </>
                }

            </div>
            <hr style={{ border: "0.5px solid #e3e3e3", width: "100%", marginTop: "0px", marginBottom: "0px" }} />
        </>
    )
}
