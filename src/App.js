import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component.jsx";
import { Switch, Route } from "react-router-dom";
import { ShopPage } from "./pages/shopPage/ShopPage.component";
import Header from "./components/header/header.component";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
