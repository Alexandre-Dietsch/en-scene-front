import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import ExploreCategories from './components/ExploreCategories/ExploreCategories';
import ArtistsByCategory from './components/Artists/ArtistsByCategory';
import ArtistProfil from './components/Artists/ArtistProfil';
import ProtectedRoute from './routes/ProtectedRoute';

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
            <ProtectedRoute path='/explore-categories'>
              <ExploreCategories />
            </ProtectedRoute>
            <ProtectedRoute path='/categories/:idcategory'>
              <ArtistsByCategory />
            </ProtectedRoute>
            <ProtectedRoute path='/artist/:idartist'>
              <ArtistProfil />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}