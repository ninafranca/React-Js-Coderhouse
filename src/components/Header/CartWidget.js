import React from 'react';
import Bag from './bag.png';
import './_CartWidget.scss'


function CartWidget () {
    return (
        <div className="cart-img">
           <img src={Bag} alt="Cart Logo"></img>
           <p>0</p>
        </div>
    )
}

export default CartWidget;