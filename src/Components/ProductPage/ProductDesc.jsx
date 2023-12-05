import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import style from "./SingleProd.module.css"
export default function ProductDesc({ product }) {
    let dispatch = useDispatch()
    const [quantity, setquantity] = useState(1);
    const [added, setadded] = useState(false);
    function handlerChangeUp() {
        setquantity(quantity + 1)
    }
    function handlerChangeDown() {
        if (quantity > 1)
            setquantity(quantity - 1)
    }
    function handlerClick() {
        dispatch(addToCart(product, quantity))
        setadded(true)
        setTimeout(() => setadded(false), 3000);
    }
    return (
        <>
            <div className="col-lg-6">
                <div className="details_content">
                    <div className="details_name">{product.name}</div>
                    {/* <div className="details_discount">$890</div> */}
                    <div className="details_price">${product.price}</div>

                    <div className="in_stock_container">
                        <div className="availability">Availability:</div>
                        <span>In Stock</span>
                    </div>
                    <div className="details_text">
                        <p>{product.description}</p>
                    </div>


                    <div className={style.product_quantity_container}>
                        <div className="product_quantity clearfix">
                            <span>Qty</span>
                            <input id="quantity_input" min="1" style={{ Appearance: "none" }} type="number" pattern="[0-9]*" value={quantity} onChange={() => handlerChangeUp} />
                            <div className="quantity_buttons">
                                <div id="quantity_inc_button" onClick={() => handlerChangeUp()} className="quantity_inc quantity_control"><i className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                <div id="quantity_dec_button" onClick={() => handlerChangeDown()} className="quantity_dec quantity_control"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className="button cart_button" style={{ height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => handlerClick()} > <a>Add to cart</a></div>
                        {
                            !added ?
                                <div className="place">
                                    added to cart <i className="fa fa-check" aria-hidden="true"></i>
                                </div>
                                :

                                <div className={added ? "added" : "none"}>
                                    added to cart <i className="fa fa-check" aria-hidden="true"></i>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
