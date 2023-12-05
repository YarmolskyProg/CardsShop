import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActive, setMethod } from '../../redux/actions'

export default function SingleMethod({ method, setact }) {
    let dispatch = useDispatch()
    let summ = useSelector(state => {
        return state.shop.summary
    })
    function handlerClick() {
        dispatch(setMethod(method, summ))
        dispatch(setActive(method))
        setact(0)
    }
    let active = useSelector(state => {
        return state.shop.active
    })
    return (
        <>
            <li onClick={() => handlerClick()}>
                <p className={active.id == method.id ? "taste active" : 'taste'}>
                    <img className='biImg' src={method.img} alt="" />
                    {method.name}
                </p>
                <p className={active.id == method.id ? "active" : ''}>{method.chain}</p>

            </li>
            <hr style={{ borderTop: "1px sloid" }} />
        </>
    )
}
