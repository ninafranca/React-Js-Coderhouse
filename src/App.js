import React from 'react';
// REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// CONTEXT
import { CartProvider } from './components/Context/CartContext';
// JS
import NavBar from './components/Header/NavBar';
import Details from './components/Body/ItemDetailContainer';
import Categories from './components/Body/CategoryList';
import CategoriesColor from './components/Body/CategoryListColor';
import Footer from './components/Footer/Footer';
import Products from './Views/Products';
import Contact from './Views/Contact';
import Cart from './Views/Cart';
import OrderForm from './Views/OrderForm';
// SCSS
import './Styles.scss';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Products} />
                        <Route path="/products" component={Products} />
                        <Route path="/details/:id" component={Details} />
                        <Route path="/category/:id" component={Categories} />
                        <Route path="/category-color/:id" component={CategoriesColor} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/order-form" component={OrderForm} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;