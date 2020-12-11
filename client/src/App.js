import React from "react";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GlobalContextProvider } from "./utils/context";
import ProtectedRoute from "./utils/router/ProtectedRoute";
import Header from "./components/Header";
import { Main } from "./components/helper/Main";
import Today from "./Pages/Today";
import Event from "./Pages/Event";
import Login from "./Pages/Login";

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute exact path="/">
              <Today />
            </ProtectedRoute>
            <ProtectedRoute path="/event/:eventID">
              <Event />
            </ProtectedRoute>
            <Route path="/*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Main>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
