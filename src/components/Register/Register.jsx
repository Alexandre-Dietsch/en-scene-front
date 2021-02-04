import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Register({ registerHandler, userInfo, setUserInfo }) {
  const history = useHistory();

  const { role, pseudo, email, password, passwordConfirmation } 
  = userInfo;

  return(
    <div className="register-container">
      <div className="register-header">
        <h2>Viens découvrir de formiables artistes !</h2>
        <span>C'est par ici pour créer ton compte</span>
      </div>
      <div className="register-form">
        <form onSubmit={registerHandler}>
          <div className="register-role">
            <select 
              value={role} 
              name='role'
              onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value})}
            >
              <option value='1'>Je suis un spectateur</option>
              <option value='2'>Je suis un artiste</option>
            </select>
          </div>
          <div className="register-pseudo">
            <label htmlFor='pseudo'>Pseudo</label>
            <input
            type='text' 
            id='pseudo'
            name='pseudo'
            value={pseudo}
            onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="register-email">
            <label htmlFor='register-email'>Email</label>
            <input
            type='email' 
            id='register-email'
            name='email'
            value={email}
            onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="register-password">
            <label htmlFor='password'>Mot de passe</label>
            <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="register-confirmation-password">
            <label htmlFor='confirmation-password'>Confirme ton mot de passe</label>
            <input
            type='password'
            id='confirmation-password'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={(e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="register-button">
            <button type='submit'>Je veux créer un compte</button>
          </div>
        </form>
      </div>
      <div className="login-account">
        <button
        type='button'
        onClick={() => history.push('/access-login')}
        >Tu veux te connecter ? <strong>C'est ici</strong>
        </button>
      </div>
    </div>
  );
}