import React from 'react';
import ItemCount from '../components/Body/ItemCount';
import './_ItemDetails.scss';
import {Link} from 'react-router-dom';

function propDetail({prop}) {
    return (
        <div>

          <div className="prop card item-detail">
              <img src={`${prop.image}`} alt="Imágen Producto"></img>
              <p key={prop.id} className="prop-p">{prop.title} <span>${prop.price}</span></p>
              <p className="prop-p-description">{prop.description}</p>
              <ItemCount />
              <Link to="/products"><p className="prop-p-volver">volver</p></Link>
          </div>
            {/*
            <Card>
      <Card.Content>
        <img
          src={`${prop.image}`}/>
        <Card.Header>{prop.title}</Card.Header>
        <Card.Meta><p>${prop.price}</p></Card.Meta>
        <Card.Description>
        <p>{prop.description}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={()=>{swal(`${prop.title}`, 'Agregado al Carrito', 'success')}} basic color='green'>
            Agregar
          </Button>
          <Link to='/'>
          <Button basic color='red'>
            Volver
          </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
            */}
        </div>
    )
}

export default propDetail;
