import React from 'react'
import ProductDesc from './ProductDesc'
import ProductGallery from './ProductGallery'
import RelatedProducts from './RelatedProducts'
import Singlebanner from './Singlebanner'
import "./SingleProd.css"
import { useSelector } from 'react-redux'
export default function ProductComponent() {
    let product = useSelector(state => {
        return JSON.parse(localStorage.getItem('curprod'))
    })
    return (
        <>
            <Singlebanner />
            <div className="product_details">
                <div className="container">
                    <div className="row details_row">
                        <ProductGallery product={product} />
                        <ProductDesc product={product} />
                    </div>
                </div>
            </div>
            <RelatedProducts product={product} />
        </>
    )
}
