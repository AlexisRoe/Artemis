import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./utils/router_config/router";
import { AuthProvider } from "./utils/contextApi/contextAPI";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
