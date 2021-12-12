
import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'
import Header from './components/header/header-component';
import './page/homepage/homepage.styles.scss'

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      
      </Switch>
      </div>
    </Router>
  );
}

export default App;
