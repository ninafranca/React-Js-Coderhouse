import React, {useEffect, useState} from 'react';
import './_ItemDetailContainer.scss';
import ItemDetail from '../../Views/ItemDetail';
import Placeholder from './product-placeholder.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ItemDetailContainer({match}) {
    let itemId = parseInt(match.params.id);
    const [item, setItem] = useState ([]);

    useEffect(() => {
       axios('http://localhost:3000/data.json').then((res) => setItem (res.data.find((e) => e.id === itemId)), console.log(item));
    }, [itemId, item]);

   return (
       <>
       {item.length === 0 ? (
            <div className="item-detail-container">
                <div className="prop card item-detail">
                    <img src={Placeholder} alt="Cargando imágen"></img>
                    <Link to="/products"><p className="prop-p-volver">volver</p></Link>
                </div>
            </div>
       ) : (
       <>
           <ItemDetail key={item[0].id}
                       price={item[0].price}
                       title={item[0].title}
                       category={item[0].category}
                       image={item[0].image}
                       stock={item[0].stock}
                       description={item[0].description}>  
           </ItemDetail>
                   
         </>
       )}
       </>
     )
}

/*
const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect((product) => {
        setTimeout(() => {
            axios.get('data.json').then(data => {data.find(p => p.id === id); return setProduct(product)})
        }, 1000);
    }, [id, product]);

    return (
        product === [] ? (
            <div className="item-detail-container">
                <img src={Placeholder} alt="Cargando imágen"></img>
            </div>
        ) : ( 
            <ItemDetail id={product.id} title={product.title} description={product.description} price={product.price} image={product.image}/>
        )
    )
}; */

/*function ItemDetailContainer({match}) {
    const itemID = parseInt(match.params.id);
    const [item, setItem] = useState([]);

    useEffect( () => {
        setTimeout( () => {
            axios.get('data.json').then((res) => setItem(res.data.filter((e) => e.id === itemID)))
        }, 1000);
    }, [itemID]);

    return (
        <div className="item-detail-container">
            {!item === 0 ? (
                <img src={Placeholder} alt="Cargando imágen"></img>
            ) : (
                <div className="card" key={item[0].id}>
                    <ItemDetail 
                        key={item[0].id}   
                        id={item[0].id}
                        title={item[0].title}
                        price={item[0].price}     
                        category={item[0].category}       
                        image={item[0].image}  
                        description={item[0].description}        
                    />
                </div>
            )}
        </div>
    )
}
*/

/*
function ItemDetailContainer() {
    
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect( () => {
        setTimeout( () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then (res => res.json())
            .then (res => setItem(res))
        }, 2000);
    }, [id])

    return (
        <div className="item-detail-container">
            <div className="card" key={item.id}>
                <ItemDetail  prop={item}/>
            </div>
        </div>
    )
}
*/

export default ItemDetailContainer;
