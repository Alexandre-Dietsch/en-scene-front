import React from 'react';
import ListOfPictures from './ListOfPictures';

export default function Login() {
  return(
    <div className='login-container'>
      <div className="login-content">
        <div className="login-background" />
        <ListOfPictures />
        <button type='button' className='login-button'>
          Se connecter
        </button>
        <span>
          Vous n'avez pas de conmpte ? <strong>Inscivez-vous</strong>
        </span>
      </div>
    </div>
  );
}