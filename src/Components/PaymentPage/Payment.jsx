import { isEmptyObject } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DisablePayment from './DisablePayment'

export default function Payment({ method }) {
    let sum = useSelector(state => {
        return state.shop.sumcrypto
    })
    // const [state, setstate] = useState(0);
    // useEffect(() => {
    //     setstate()
    // }, []);
    return (
        <>
            {
                method == 10 || sum == 0 ?
                    <div className='payment_wrap'>
                        <div className='dis'>
                            <p>
                                Choose payment method
                            </p>
                        </div>
                    </div> :
                    <div className='payment_wrap'>
                        {
                            isEmptyObject(method) ? <DisablePayment /> :
                                <>
                                    <p className='attention'>Carefully check the details of the application and send the assets in one transaction</p>
                                    <div className='email_form_wrp'>
                                        <input className='email_form' type="email" placeholder='Enter your email address' />
                                        <button className='confirm_btn'>Confirm</button>
                                    </div>
                                    <div className='wrpFR'>
                                        <span>click to copy:</span>
                                        <div className='sum_add_wrp'>

                                            <div className='sum_field'>

                                                <p className='sum_qtty_coin' onClick={() => { navigator.clipboard.writeText(sum) }}>{sum}</p>
                                                <p className='sum_coin'>{method.shortname}</p>
                                            </div>
                                            <div className='address_field_wrp'>
                                                <p className='address_field' onClick={() => { navigator.clipboard.writeText(method.address) }}>
                                                    {method.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='pay_status'>
                                            <p>Waiting for payment</p>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
            }
        </>
    )
}
