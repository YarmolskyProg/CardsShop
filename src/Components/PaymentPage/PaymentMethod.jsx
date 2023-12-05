import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActive, setMethod } from '../../redux/actions'
import SingleMethod from './SingleMethod'

export default function PaymentMethod() {
    const payment = JSON.parse(localStorage.getItem('payment'))
    let dispatch = useDispatch()
    const [act, setact] = useState(0);
    function handlerClick(e) {
        dispatch(setMethod({}))
        setact(e)
        dispatch(setActive({}))
    }
    return (
        <div className='methodwrap'>
            <div className='methods'>
                <p className='met_p'>Choose payment method:</p>
                <hr className='hr_pay' />
                <ul className='cards mn_ul'>
                    <p className='cryp_cred'>Credit Card</p>
                    <li onClick={() => handlerClick(1)} >
                        <p className={act == 1 ? "taste active" : 'taste'}>
                            <img className='bigImg' src='/images/payment/visa.png' alt="" />
                            Visa
                        </p>
                        <p className={act == 1 ? "active" : ''}>USD</p>
                    </li>
                    <hr style={{ borderTop: "1px sloid" }} />
                    <li onClick={() => handlerClick(2)} className={act == 2 ? "active" : ''}>
                        <p className={act == 2 ? "taste active" : 'taste'}>
                            <img className='bigImg' src='/images/payment/mastercard.png' alt="" />
                            MasterCard
                        </p>
                        <p className={act == 2 ? "active" : ''}>USD</p>
                    </li>
                </ul>
                <hr className='hr_pay' />
                <ul className='crypto mn_ul'>
                    <p className='cryp_cred'>Crypto</p>
                    {
                        payment &&
                        payment.map((res, index) => {
                            return <SingleMethod method={res} key={index} setact={setact} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
