import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./views/Layout";
import OrderInfo from "./views/OrderInfo";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/products/:id" exact component={OrderInfo} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
