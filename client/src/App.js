import React from "react";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GlobalContext } from "./utils/globalContext";
import Header from "./components/Header/Header";
import ProtectedRoute from "./utils/router";
import Today from "./Pages/Today";
import Event from "./Pages/Event";
import Login from "./Pages/Login";

function App() {
  return (
    <GlobalContext>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/day">
            <Today />
          </ProtectedRoute>
          <ProtectedRoute path="/event/:eventID">
            <Event />
          </ProtectedRoute>
          <Route path="/*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </GlobalContext>
  );
}

export default App;
