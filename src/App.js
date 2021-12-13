/* eslint-disable no-dupe-class-members */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import SignInAndOutPage from "./page/signin-signup/sign-in-sign-out.component";
import Header from "./components/header/header-component";

import "./page/homepage/homepage.styles.scss";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    //open subscription

    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //open subscription

    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndOutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
