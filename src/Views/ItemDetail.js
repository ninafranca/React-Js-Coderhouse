import React, {useState, useContext} from 'react';
import ItemCount from '../components/Body/ItemCount';
import './_ItemDetails.scss';
import {Link} from 'react-router-dom';
import {CartContext} from '../components/Context/CartContext';

function ItemDetail({prop}) {
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (e) => {
        setQuantity(e);
        addItem(prop, e);
    }

    return (
        <div>
            <div className="prop card item-detail">
                <img src={prop.image} alt="Imágen Producto"></img>
                <p key={prop.id} className="prop-p">{prop.title} <span>${prop.price}</span></p>
                <p className="prop-p-description">{prop.description}</p>
                {quantity === 0 ? 
                    <ItemCount stock={prop.stock} name={prop.title} onAdd={onAdd}/>
                :   <div>
                    <p><b>Compraste {quantity} {prop.title}</b></p>
                    <Link to={'/cart'} ><button className="btn btn-secondary">Terminar compra</button></Link>
                    </div>      
                    
                }
                <Link to="/products"><p className="prop-p-volver">volver</p></Link>
            </div>
        </div>
    )
}

export default ItemDetail;
