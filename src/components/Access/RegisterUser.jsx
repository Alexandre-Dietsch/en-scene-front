import React from 'react';
import { useHistory } from 'react-router-dom';

export default function RegisterUser() {
  const history = useHistory();
  
  return(
    <div className="register-container">
      <div className="register-header">
        <h2>Viens découvrir de formiables artistes !</h2>
        <span>C'est par ici pour créer ton compte</span>
      </div>
      <div className="register-form">
        <form>
          <div className="register-role">
            <select>
              <option>Je suis un spectateur</option>
              <option>Je suis un artiste</option>
            </select>
          </div>
          <div className="register-pseudo">
            <label htmlFor='pseudo'>Pseudo</label>
            <input
            type='text' 
            id='pseudo'
            />
          </div>
          <div className="register-email">
            <label htmlFor='register-email'>Email</label>
            <input
            type='email' 
            id='register-email'
            />
          </div>
          <div className="register-password">
            <label htmlFor='password'>Mot de passe</label>
            <input
            type='password'
            id='password'
            />
          </div>
          <div className="register-confirmation-password">
            <label htmlFor='confirmation-password'>Confirme ton mot de passe</label>
            <input
            type='password'
            id='confirmation-password'
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