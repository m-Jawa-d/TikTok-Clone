import React from 'react'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
function TotalPrice() {
    const [{ basket }] = useStateValue();
    return (
        <div>
            <div>
                <p className='mx-3'> Subtotal ({basket?.length} items):  <strong>{getBasketTotal(basket)}$</strong> </p>
            </div>
            <div className='checkbox_flexo text-center'>
                <input type="checkbox" />
                <p>This order contain a gift</p>
            </div>
            <div className='text-center  '>
                <button className='buton_basket btn_sm p-1 w-100 '>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default TotalPrice
