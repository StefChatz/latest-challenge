import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AppLayout, Header, Main } from '../components';
import { Details, History } from '../views';
import './App.css';

export const App = () => (
  <AppLayout className="App">
    <Header />
    <Main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/history" />
          </Route>
          <Route exact path="/history" component={History} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </Main>
  </AppLayout>
);
