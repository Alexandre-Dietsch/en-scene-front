import React from 'react';
import { useHistory } from 'react-router-dom';
import HomePictures from './HomePictures';

export default function Home() {
  const history = useHistory();

  return(
    <div className='login-container'>
      <div className="login-content">
        <span className="login-background" />
        <HomePictures />
        <button type='button' className='login-button' onClick={() => history.push('/access-login') }>
          Se connecter
        </button>
        <span>
          Vous n'avez pas de compte ? 
          <button onClick={() => history.push('/access-register')}>Inscivez-vous</button>
        </span>
      </div>
    </div>
  );
}