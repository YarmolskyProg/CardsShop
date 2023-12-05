import React from 'react'
import BanerComp from './BanerComp'
import BenefitsComp from './BenefitsComp'
import Products from './Products'
import "./Shop.css"
export default function ShopComponent() {


    return (
        <>
            <BanerComp />
            <Products />
            <BenefitsComp />
        </>
    )
}
