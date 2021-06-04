import React from 'react';
import Bag from './bag.png';

const bag = {
    width: "5rem"
}

function CartWidget () {
    return (
        <div className="cart-img">
           <img src={Bag} alt="Cart Logo" style={bag}></img>          
        </div>
    )
}

export default CartWidget;