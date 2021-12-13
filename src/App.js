
import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'
import SignInAndOutPage from './page/signin-signup/sign-in-sign-out.component'
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
      <Route path='/signin' component={SignInAndOutPage} />
      
      </Switch>
      </div>
    </Router>
  );
}

export default App;
