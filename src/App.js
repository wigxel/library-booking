import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./views/Layout";
import { LayoutProvider } from './libs/LayoutStore';

const App = () => {
  return (
  	<LayoutProvider>
	    <Router>
	      <Layout>
	      </Layout>
	    </Router>
    </LayoutProvider>
  );
};

export default App;
