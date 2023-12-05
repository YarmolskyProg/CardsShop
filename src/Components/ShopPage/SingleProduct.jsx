import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrent } from '../../redux/actions'

export default function SingleProduct({ product }) {
    let dispatch = useDispatch()
    function handlerClick(product) {
        dispatch(setCurrent(product))
    }
    return (
        <div className="product" onClick={() => handlerClick(product)}>
            <Link to="/product">
                <div className="product_image">
                    <img src={product.img} alt="" />
                </div>
                <div className="product_content">
                    <div className="product_title">
                        {product.name}
                    </div>
                    <div className="product_price">${product.price}</div>
                </div>
            </Link>
        </div>

    )
}
