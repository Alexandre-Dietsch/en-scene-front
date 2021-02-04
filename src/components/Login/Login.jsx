import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login({ userCredentials, setUserCredentials, loginHandler }) {  
  const { email, password } = userCredentials;
  const history = useHistory();

  return(
    <div className="access-container">
      <div className="access-header">
        <h2>Welcome Back</h2>
        <span>Entre tes identifiants pour te connecter</span>
      </div>
      <div className="access-form">
        <form onSubmit={loginHandler}>
          <div className="access-login-pseudo">
            <label htmlFor='email'>Email</label>
            <input
            type='email'
            name='email' 
            id='email'
            value={email}
            onChange={(e) => setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="access-login-password">
            <label htmlFor='password'>Mot de passe</label>
            <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="access-login-button">
            <button type='submit'>C'est parti</button>
          </div>
        </form>
      </div>
      <div className="access-register-account">
        <button
        type='button'
        onClick={() => history.push('/access-register')}
        >Pas de compte ? <strong>C'est ici</strong>
        </button>
      </div>
    </div>
  );
}
