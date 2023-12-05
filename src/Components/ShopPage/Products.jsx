import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import style from "./Shop.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { LoadProducts } from '../../redux/shopReducer'
import { loadCategory, loadedProducts, loadMore, productsLoad, Search_item, setPag, sortProd } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import { isEmptyObject } from 'jquery'
import { Cookies } from 'react-cookie'
export default function Products() {
    let loadmore = useSelector(state => {
        return state.shop.loadmore
    })
    let dispatch = useDispatch()
    let params = useParams()
    let search = useSelector(state => {
        return state.shop.search
    })
    let amount = useSelector(state => {
        return state.shop.showingAmount
    })

    let products = useSelector(state => {
        if (state.shop.loadedProducts) {
            return state.shop.loadedProducts
        }
    })
    
    useEffect(() => {
        dispatch(setPag())
        dispatch(productsLoad(params, search))

    }, [params]);

    // let storage = JSON.parse(localStorage.getItem('products'))
    // let products = JSON.parse(localStorage.getItem('products'))

    function handlerClick() {
        dispatch(loadMore(params))
    }
    // function handlerSort(data) {
    //     dispatch(sortProd(data))
    // }
    return (
        <div className={style.products} >
            <div className="container" style={{ marginBottom: "150px" }}>
                <div className="row">
                    <div className="col">
                        <div className="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start" style={{ paddingBottom: "45px" }}>
                            <div className="results">Showing <span>{amount}</span> results</div>
                            {/* <div className="sorting_container ml-md-auto">
                                <div className="sorting">
                                    <ul className="item_sorting">
                                        <li>
                                            <span className="sorting_text">Sort by</span>
                                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                            <ul>
                                                <li className="product_sorting_btn" onClick={() => handlerSort(0)} ><span>Default</span></li>
                                                <li className="product_sorting_btn" onClick={() => handlerSort(1)}><span>Price increase</span></li>
                                                <li className="product_sorting_btn" onClick={() => handlerSort(2)}><span>Price decrease</span></li>
                                                <li className="product_sorting_btn" onClick={() => handlerSort(3)} ><span>Name(A-Z)</span></li>
                                                <li className="product_sorting_btn" onClick={() => handlerSort(4)}><span>Name(Z-A)</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="product_grid" style={{ marginTop: "0px" }}>
                            {
                                products &&
                                products.map((res, index) => {
                                    return <SingleProduct key={index} product={res} />
                                })
                            }
                        </div>
                        <div className={!loadmore ? style.none : style.product_pagination} onClick={() => handlerClick()} >
                            <span>Load more</span>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
