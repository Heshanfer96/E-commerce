import React from 'react'
import { subtotalValue } from '../../reducer';
import { useStateValue } from '../../StateProvider'
import './subtotal.css'
import { useNavigate } from 'react-router-dom'

function Subtotal() {

    const[{basket}]=useStateValue();

    const navigate=useNavigate()

    // console.log(subtotalValue(basket));


    return (
        <div className='subtotal'>
            <p>Subtotal ({basket?.length} iteams)  : <strong> $ <span>{subtotalValue(basket)}</span></strong></p>
            <small className='subtotal_gift'>
                <input type="checkbox" />  this order contains a gift
            </small><br />
            <button className='Subtotal_btn' onClick={e => navigate("/payement")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
