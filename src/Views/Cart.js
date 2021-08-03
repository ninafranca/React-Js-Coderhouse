import React, { useContext } from 'react';
// REACT ROUTER DOM
import { Link } from 'react-router-dom';
// CONTEXT
import { CartContext } from '../components/Context/CartContext';
// SCSS
import './_Cart.scss';

function Cart() {
    const {
      cart, removeItem, clear, totalPrice,
    } = useContext(CartContext);

    return (
        <div>
            <div>
                <h2 className="titulo">CARRITO DE COMPRAS</h2>
            </div>
            <div>
                <section id="form">
                    <div className="contact-form cart">
                        { cart.length === 0
                            ? (
                                <div className="empty-cart">
                                    <p><b>TU CARRITO ESTÁ VACÍO</b></p>
                                    <Link to="/products"><button className="btn">Ir a productos</button></Link>
                                </div>
                            )
                            : (
                                <div className="cart-div">
                                    {cart.map((i) => (
                                        <div className="cart-item" key={i.item.id}>
                                            <img src={i.item.image} alt="Imágen producto en carrito" />
                                            <div className="items-cart">
                                                <p className="item-title">{i.quantity}{' '}{i.item.title}{' '}<span>$ {i.item.price}</span></p>
                                                <p className="cart-p-item">total item: $ {i.item.price * i.quantity}</p>
                                                <p className="remove-item" onClick={()=>removeItem(i.item.id)}>X</p>
                                            </div>
                                        </div>
                                    ))}
                                    <p className="cart-total">TOTAL: $ {totalPrice}</p>
                                    <div className="cart-checkout">
                                        <Link to="/order-form">
                                            <button className="btn cart-total">Finalizar compra</button>
                                        </Link>
                                    </div>
                                    <div className="cart-buttons">
                                        <button className="btn" onClick={clear}>Vaciar carrito</button>
                                        <Link to="/products"><button className="btn">seguir comprando</button></Link>
                                    </div>
                                </div>
                          )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Cart;
