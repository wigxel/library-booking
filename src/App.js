import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./views/Layout";
import HomePage from "./HomePage";
import { LayoutProvider } from './libs/LayoutStore';

const App = () => {
  return (
  	<LayoutProvider>
	    <Router>
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route path="/dashboard" component={Layout} />
				</Switch>
	    </Router>
    </LayoutProvider>
  );
};

export default App;
