import React, {useContext} from 'react';
// REACT ROUTER DOM
import {Link} from 'react-router-dom';
// CONTEXT
import {CartContext} from '../Context/CartContext';
// IMG
import Bag from './bag.png';
// SCSS
import './_CartWidget.scss';

function CartWidget () {
    const {cart, totalQuantity} = useContext(CartContext);

    return (
        <div>
            { cart.length === 0 ? 
            <div></div>
            :
            <Link to='/cart'>
                <div className="cart-img">
                    <img src={Bag} alt="Cart Logo"></img>
                    <p>{totalQuantity}</p>
                </div>
            </Link>
        }
        </div>
    )
}

export default CartWidget;