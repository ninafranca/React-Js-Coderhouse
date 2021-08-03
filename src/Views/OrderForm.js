import React, { useContext, useState } from 'react';
// CONTEXT
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { CartContext } from '../components/Context/CartContext';
// FIREBASE
import { db } from '../Firebase.js';
// TIME STAMP
// SCSS
import './_Contact.scss';
import './_OrderForm.scss';

function OrderForm() {
    const { totalPrice, cart, setCart } = useContext(CartContext);
    const [user, setUser] = useState({});
    const [order, setOrder] = useState('');

    const nameChange = (e) => {
        const customer = user;
        customer.name = e.target.value;
        setUser(customer);
    };

    const emailChange = (e) => {
        const customer = user;
        customer.email = e.target.value;
        setUser(customer);
    };

    const phoneChange = (e) => {
        const customer = user;
        customer.phone = e.target.value;
        setUser(customer);
    };

    const newOrder = async (object) => {
        const newOrder = await db.collection('order').add(object);
        setOrder(newOrder.id);
    };

    const orderSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: user,
            items: cart,
            date: new Date(),
            total: totalPrice,
        };
        newOrder(order);
        setCart([]);
    };

    return (
        <div>
            <div>
                <h2 className="titulo">FORMULARIO DE COMPRA</h2>
            </div>
            <div className="form-cart">
                <section id="form">
                    { totalPrice !== 0 ? (
                        <form className="contact-form">
                            <div className="section-contacto__form--nombre">
                                <label htmlFor="nombre">Nombre completo</label>
                                <input type="text" name="nombre" id="nombre" className="shadow p-3 mb-2 bg-body rounded" required onChange={nameChange} />
                            </div>
                            <div className="section-contacto__form--nombre">
                                <label htmlFor="tel">Teléfono</label>
                                <input type="tel" name="tel" id="nombre" className="shadow p-3 mb-2 bg-body rounded" required onChange={phoneChange} />
                            </div>
                            <div className="section-contacto__form--email email">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="mail" className="shadow p-3 mb-2 bg-body rounded" required onChange={emailChange} />
                            </div>
                            <div className="order_total-date">
                                <div className="section-contacto__form--email fecha">
                                    <label>Fecha:</label>
                                    <SimpleDateTime dateSeparator="-" format="DMY" showTime="0">{new Date()}</SimpleDateTime>
                                </div>
                                <div className="section-contacto__form--nombre order-total">
                                    <label>Total:</label>
                                    <p>${totalPrice}</p>
                                </div>
                            </div>
                            <div className="section-contacto__form--borrar-enviar">
                                <div>
                                    <button type="reset" id="borrar" className="rounded btn-outline-dark">borrar</button>
                                </div>
                                <div>
                                    <button type="submit" id="enviar" className="rounded btn-outline-dark" onClick={(e) => orderSubmit(e)}>enviar</button>
                                </div>
                            </div>
                        </form>
                      ) : (
                          <form className="contact-form form-order">
                              <p>¡Orden realizada con éxito!</p>
                              <p>Su ID de compra es <span>{order}</span></p>
                          </form>
                      )}
                </section>
            </div>
        </div>
    );
}

export default OrderForm;
