import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

function Home() {
    return (
        <div className="home">
            <h2 className="titulo">Bienvenido a Nanette Shoes</h2>
            <LoremIpsum p={4} />
        </div>
    )
}

export default Home