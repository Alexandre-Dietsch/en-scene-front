import React from 'react';
import { useHistory } from 'react-router-dom';
import ListOfPictures from './ListOfPictures';

export default function Login() {
  const history = useHistory();

  return(
    <div className='login-container'>
      <div className="login-content">
        <div className="login-background" />
        <ListOfPictures />
        <button type='button' className='login-button' onClick={() => history.push('/access-login') }>
          Se connecter
        </button>
        <span>
          Vous n'avez pas de conmpte ? 
          <button onClick={() => history.push('/access-register')}>Inscivez-vous</button>
        </span>
      </div>
    </div>
  );
}