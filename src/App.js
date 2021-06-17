import React from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Body/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer 
        greeting={"Productos"}
      />
    </div>
  );
}

export default App;
