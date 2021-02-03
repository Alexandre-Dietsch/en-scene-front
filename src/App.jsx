import React from 'react';
import './scss/main.scss';

import Login from './components/Login/Login';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}