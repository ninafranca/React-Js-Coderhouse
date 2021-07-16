// TIME STAMP
import React, {useContext, useState} from 'react';
// CONTEXT
import {CartContext} from '../components/Context/CartContext';
// FIREBASE
import {db} from '../../src/Firebase.js';
// DATE
import SimpleDateTime  from 'react-simple-timestamp-to-date';
// SCSS
import './_Contact.scss';
import './_OrderForm.scss';

function OrderForm() {
    /*
    const {totalPrice, cart} = useContext(CartContext);
    const [order, setOrder] = useState('');
    const [name, setName]= useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [customer, setCustomer] = useState('');
    const buyer = {name, phone, email};
    const orderInfo = [];
    const date = new Date();

    const addOrder = () => {
        setCustomer(buyer);
        orderInfo.push(customer, cart, `Price: $${totalPrice}`, date)
        const addToDB = async (array) => {
            const newOrder = await db.collection('orders').add(array);
            setOrder(newOrder.id);
        console.log(orderInfo);
        }
    }
    */

    const {totalPrice, cart, setCart} = useContext(CartContext);
    const [user, setUser] = useState({});
    const [order, setOrder] = useState('');

    const nameChange = (e) => {
        let customer = user;
        customer.name = e.target.value;
        setUser(customer);
    };

    const emailChange = (e) => {
        let customer = user;
        customer.email = e.target.value;
        setUser(customer);
    };

    const phoneChange = (e) => {
        let customer = user;
        customer.phone = e.target.value;
        setUser(customer);
    };

    const newOrder = async(object) => {
        const newOrder = await db.collection('order').add(object);
        setOrder(newOrder.id);
    };
    
    const orderSubmit = (e) => {
        e.preventDefault();
        let order = {
          buyer: user,
          items: cart,
          date: new Date(),
          total: totalPrice
        };
        newOrder(order);
        console.log("Hola")
        setCart([])
    };

    return (
        <div>
            <div>
                <h2 className="titulo">FORMULARIO DE COMPRA</h2>
            </div>
            <div className="form-cart">
                <section id="form">
                    {totalPrice !== 0 ? (
                        <form className="contact-form">
                            <div className="section-contacto__form--nombre">
                                <label for="nombre">Nombre completo</label>
                                <input type="text" name="nombre" id="nombre" className="shadow p-3 mb-2 bg-body rounded" /*value={name}*/ required onChange={nameChange}></input>
                            </div>
                            <div className="section-contacto__form--nombre">
                                <label for="tel">Teléfono</label>
                                <input type="tel" name="tel" id="nombre" className="shadow p-3 mb-2 bg-body rounded" /*value={phone}*/ onChange={phoneChange}></input>
                            </div>
                            <div className="section-contacto__form--email email">
                                <label for="email">E-mail</label>
                                <input type="email" name="email" id="mail" className="shadow p-3 mb-2 bg-body rounded" /*value={email}*/ required onChange={emailChange}></input>
                            </div>
                            <div className="order_total-date">
                                <div className="section-contacto__form--email fecha">
                                    <label>Fecha:</label>
                                    <SimpleDateTime dateSeparator="-" format="DMY" showTime="0">{new Date()}</SimpleDateTime>
                                </div>
                                <div className="section-contacto__form--nombre order-total">
                                    <label>Total:</label>
                                    <p>$ {totalPrice}</p>
                                </div>
                            </div>
                            <div className="section-contacto__form--borrar-enviar">
                                <div>
                                    <button type="reset" id="borrar" className="rounded btn-outline-dark">borrar</button>
                                </div>
                                <div>
                                    <button type="submit" id="enviar" className="rounded btn-outline-dark" onClick={(e)=>orderSubmit(e)}>enviar</button>
                                </div>
                            </div>
                        </form> ) : (
                            <form className="contact-form">
                                <p>¡Orden realizada con éxito!</p>
                                <p>Su número de compra es {order}</p>
                            </form>
                        )
                    }
                    
                </section>
            </div>
        </div>
    )
}

export default OrderForm;
