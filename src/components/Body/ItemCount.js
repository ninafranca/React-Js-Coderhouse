import React, {useState} from 'react';
import './_ItemCount.scss';

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1);
    stock = 5;
    const handlerPlus = () => {
      setQuantity((quantity === stock) ? stock : quantity + 1 )
    };
    const handlerMinus = () =>{
      setQuantity((quantity >= 2) ? quantity - 1 : quantity)
    }

    /*addItem = (quantity) => {
        if(quantity === 1) {
            alert("Compraste 1 producto")
        } else {
            alert(`Compraste ${quantity} productos`)
        }
    }*/

    return (
            <div className="card card-main">
                <div className="card-body">
                    <div className="card card-content">
                        <p onClick={handlerMinus} className="plus-minus">-</p>
                        <p id="counter-value">{quantity}</p>
                        <p onClick={handlerPlus} className="plus-minus">+</p>
                    </div>
                    <button className="btn btn-primary" onClick={()=>onAdd(quantity)}>Comprar</button>
                </div>
            </div>
    )
}

export default ItemCount;
