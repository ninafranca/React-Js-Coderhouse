import React from 'react';
import ItemCount from '../components/Body/ItemCount';
import './_ItemDetails.scss';
import {Link} from 'react-router-dom';

function propDetail({title, description, price, image, id}) {
    return (
        <div>
          <div className="prop card item-detail">
              <img src={image} alt="Imágen Producto"></img>
              <p key={id} className="prop-p">{title} <span>${price}</span></p>
              <p className="prop-p-description">{description}</p>
              <ItemCount />
              <Link to="/products"><p className="prop-p-volver">volver</p></Link>
          </div>
        </div>
    )
}

export default propDetail;
