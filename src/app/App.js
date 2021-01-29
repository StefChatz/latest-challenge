import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AppLayout, Header } from "../components";

import { Details, History } from "../views";
import "./App.css";

export const App = () => (
  <AppLayout className="App">
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/history" />
        </Route>
        <Route exact path="/history" component={History} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  </AppLayout>
);
