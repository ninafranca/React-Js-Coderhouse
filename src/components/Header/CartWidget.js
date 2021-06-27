import React from 'react';
import Bag from './bag.png';
import './_CartWidget.scss'


function CartWidget () {
    return (
        <div className="cart-img" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
           <img src={Bag} alt="Cart Logo"></img>
           <p>0</p>

           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Tu carrito</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    )
}

export default CartWidget;