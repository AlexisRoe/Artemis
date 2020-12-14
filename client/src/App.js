import React, { useState } from "react";
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
import ErrorHandler from "./Pages/ErrorPage";
import { mockTimestamp } from "./utils/helpers";

function App() {
  const dateToday = mockTimestamp();

  return (
    <GlobalContextProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/test/">
              <Today dateToday={dateToday} />
            </Route>
            <ProtectedRoute exact path="/" component={Today} />
            <ProtectedRoute exact path="/day/:timestamp" component={Today} />
            <ProtectedRoute exact path="/event/:eventID" component={Event} />
            <ProtectedRoute path="/404" component={ErrorHandler} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Main>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
