import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setCurrent } from '../../redux/actions';
import { LoadProducts } from '../../redux/shopReducer';
import style from "./main.module.css"
import SingleMainProd from './SingleMainProd';
export default function ProductsComponent() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(LoadProducts())

    }, []);
    let products = useSelector(state => {
        if (state.shop.products[0]) {
            // localStorage.setItem('products', JSON.stringify(state.shop.products[0].products))
            return state.shop.products[0].products
        }
    })
    
    return (
        <div className={style.products}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={style.product_grid}>
                            {
                                products &&
                                products.map((res, index) => {
                                    if (res.banner == 1)
                                        return < SingleMainProd key={index} product={res} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
