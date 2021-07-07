import React, {useEffect, useState} from 'react'
// FIREBASE
import {db} from '../../Firebase';
// JS
import Item from './Item';
// SCSS
import './_ItemList.scss';

function ItemList() {
    const [products, setProducts] = useState([]);

	const addOrEdit = async (object) => {
		// El Objeto que recibimos por parametro nos trae el state
		// desde el componente FormComponent
		// console.log('Hice Click');
		console.log(object);
		await db.collection('products').doc().set(object);
		console.log('nuevo producto agregado!');
	};

	const getProducts = () => {
		// QuerySnapshot es el nombre de la respuesta que nos da Firebase
		db.collection('products').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				// console.log(doc.data());
				// console.log(doc.id);
				docs.push({ ...doc.data(), id: doc.id });
				// Cada vez que nos traigamos todos los datos, vamos a combinar c/u de esos objetos con su id en un nuevo objeto
				// Cada vez que nos traigamos todos los datos, vamos a combinar c/u de esos objetos con su id en un nuevo objeto
				console.log(docs);
			});
			setProducts(docs);
		});
	};

	// Al poner el array vacio se va a ejecutar la primera vez que cargue el componente
	useEffect(() => {
		// Le pasamos la funcion getProducts() dentro del useEffect para que
		// se ejecute cada vez que cargue el componente
		getProducts();
	}, []);

    return (
        <div className="item-list">
        {products.map(p => 
            <div className="card" style={{ margin: 10}} key={p.id}>
                <Item 
                    key={p.id}
                    image={p.image} 
                    title={p.title}
                    id={p.id}
                    price={p.price}
                />
            </div>
        )}
    </div>
    )}

export default ItemList;