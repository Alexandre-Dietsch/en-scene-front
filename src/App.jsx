import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import ExploreCategories from './components/ExploreCategories/ExploreCategories';
import ArtistsByCategory from './components/ArtistsByCategory/ArtistsByCategory';

//Context
import { ProvideAuth } from './contexts/ProvideAuth';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/access-login' component={LoginContainer} />
            <Route path='/access-register' component={RegisterContainer} />
            <Route path='/explore-categories' component={ExploreCategories} />
            <Route path='/categories/:idcategory' component={ArtistsByCategory} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}