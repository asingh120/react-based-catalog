import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Cards from "./Cards";
import CardFull from "./cardFull";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App" data-testId="app">
        <Switch>
          <Route exact path="/">
            <div>
              <h1>Home</h1>
              <Link to="/products">
                <button>Products</button>
              </Link>
            </div>
          </Route>
          <Route path="/products">
            <Cards />
          </Route>
          <Route path="/details/:productId" component={CardFull} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
