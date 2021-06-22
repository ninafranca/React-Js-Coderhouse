import React from 'react';
import './Styles.scss';
import NavBar from './components/Header/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Views/Home';
import Products from './Views/Products'
import Details from './components/Body/ItemDetailContainer';
import Contact from './Views/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path="/details/:id" component={Details} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
