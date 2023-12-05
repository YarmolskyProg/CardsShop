import { isEmptyObject } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DisablePayment from './DisablePayment'
import Payment from './Payment'
import "./payment.css"
import PaymentMethod from './PaymentMethod'
export default function PaymentComponent() {
    let method = useSelector(state => {
        return state.shop.method
    })
    
    return (
        <div className='wrapper_m' >
            <PaymentMethod />
            <Payment method={method} />
        </div>
    )
}
