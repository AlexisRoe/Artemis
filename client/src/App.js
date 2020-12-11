import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./utils/router_config/router";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
