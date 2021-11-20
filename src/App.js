
import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'
import './page/homepage/homepage.styles.scss'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      
      </Switch>
    </Router>
  );
}

export default App;