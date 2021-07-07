import React from 'react';
// REACT ROUTER DOM
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// CONTEXT
import {CartProvider} from './components/Context/CartContext';
// JS
import Home from './Views/Home';
import NavBar from './components/Header/NavBar';
import Products from './Views/Products';
import Details from './components/Body/ItemDetailContainer';
import Contact from './Views/Contact';
import Footer from './components/Footer/Footer';
import Category from './components/Body/CategoryList';
import Cart from './Views/Cart';
// SCSS
import './Styles.scss';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path="/details/:id" component={Details} />
          <Route path="/category/:id" exact component={Category} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;