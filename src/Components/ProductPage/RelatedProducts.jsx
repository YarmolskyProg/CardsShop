import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrent } from '../../redux/actions';

export default function RelatedProducts({ product }) {
    let related = product.category
    let dispatch = useDispatch()
    let Prod = []
    useSelector(state => {
        JSON.parse(localStorage.getItem('products')).map(res => {
            if (res.category == related && Prod.length < 4) {
                Prod.push(res)
            }
        })
    })
    function handlerClick(res) {
        dispatch(setCurrent(res))
    }
    return (
        <>
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="products_title">Related Products</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="product_grid">
                                {
                                    Prod &&
                                    Prod.map((res, index) => {
                                        return (

                                            <div key={index} className="product" onClick={() => handlerClick(res)}>
                                                <Link to="/product">
                                                    <div className="product_image"><img src={res.img} alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_title">{res.name}</div>
                                                        <div className="product_price">${res.price}</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
