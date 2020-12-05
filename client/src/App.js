import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./utils/router_config/router";
import { AuthProvider } from "./utils/contextApi/contextAPI";
import { MenuBar } from "./components/Menu/MenuBar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <MenuBar title={`test`} />
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
