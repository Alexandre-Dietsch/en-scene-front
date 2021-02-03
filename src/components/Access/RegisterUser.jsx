import React from 'react';
import { useHistory } from 'react-router-dom';

export default function RegisterUser() {
  const history = useHistory();
  return(
    <div className="register-container">
      <div className="register-header">
        <h2>Bienvenu chez En scène, viens découvrir de formiables artistes.</h2>
        <span>C'est par ici pour créer ton compte</span>
      </div>
      <div className="register-form">
        <form>
          <div className="register-form-select-role">
            <select>Je suis ? 
              <option>Spectateur</option>
              <option>Artiste</option>
            </select>
          </div>
          <div className="register-form-pseudo">
            <label>Pseudo</label>
            <i class="fas fa-user" />
            <input
            type='text' 
            />
          </div>
          <div className="register-form-email">
            <label>Email</label>
            <i class="fas fa-user" />
            <input
            type='email' 
            />
          </div>
          <div className="register-form-password">
            <label>Mot de passe</label>
            <i class="fas fa-lock" />
            <input
            type='password'
            />
          </div>
          <div className="register-form-confirmation-password">
            <label>Confirmation du mot de passe</label>
              <i class="fas fa-lock" />
              <input
              type='password'
              />
            </div>

            <div className="register-form-button">
              <button type='submit'>Enregistre-toi</button>
            </div>
        </form>
      </div>
      <div className="access-register-account">
        <button
        type='button'
        onClick={() => history.push('/access-login')}
        >Tu veux te connecter ? C'est ici.</button>
      </div>
    </div>
  );
}