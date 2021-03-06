import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { UserData } from "./utils/context/Context";
import ProtectedRoute from "./utils/router/ProtectedRoute";
import LoginRoute from "./utils/router/LoginRoute";
import Today from "./Pages/Today";
import Event from "./Pages/Event";
import Login from "./Pages/Login";

function App() {
  return (
    <UserData>
      <Router>
        <GlobalStyle />
        <Switch>
          <LoginRoute path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Today} />
          <ProtectedRoute exact path="/day/:timestamp" component={Today} />
          <ProtectedRoute exact path="/event/:eventID" component={Event} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    </UserData>
  );
}

export default App;
