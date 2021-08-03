import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const isInCart = cart.find((c) => c.item.id === item.id);
        if (isInCart !== undefined) {
            const newQuantity = isInCart.quantity + quantity;
            const newCart = cart.filter((c) => c.item.id !== item.id);
            setCart([...newCart, { item, quantity: newQuantity }]);
        } else {
            setCart([...cart, { item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((i) => id !== i.item.id));
    };

    const clear = () => {
        setCart([]);
    };

    const totalPrice = cart.reduce(
        (total, current) => total + current.item.price * current.quantity, 0,
    );

    const totalQuantity = cart.reduce(
        (total, current) => total + current.quantity, 0,
    );

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, clear, removeItem, totalPrice, totalQuantity }}>
            {props.children}
        </CartContext.Provider>
    );
};
