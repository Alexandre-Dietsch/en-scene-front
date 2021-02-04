import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AccessUser from './components/Access/AccessUser';
import CreationAccount from './components/Register/CreationAccount';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/access-login' component={AccessUser} />
          <Route path='/access-register' component={CreationAccount} />
        </Switch>
      </div>
    </Router>
  );
}