import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component.jsx";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop/hats" component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
