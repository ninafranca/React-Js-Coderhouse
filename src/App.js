import React from 'react';
import './Styles.scss';
import NavBar from './components/Header/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Views/Home';
import Products from './Views/Products';
import Details from './components/Body/ItemDetailContainer';
import Contact from './Views/Contact';
import Footer from './components/Footer/Footer';
import Category from './components/Body/CategoryList';
import {CartProvider} from './components/Context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/' exact component={Products} />
          <Route path="/details/:id" component={Details} />
          <Route path="/category/:category" exact component={Category} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;