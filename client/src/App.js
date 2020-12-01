import { Router } from "express";
import React from "react";
import GlobalStyle from "./Globalstyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./utils/router_config/router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
