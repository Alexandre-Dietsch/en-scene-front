import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AccessUser() {  
  const history = useHistory();
  
  return(
    <div className="access-container">
      <div className="access-header">
        <h2>Welcome Back</h2>
        <span>Entre tes identifiants pour te connecter</span>
      </div>
      <div className="access-form">
        <form>
          <label>Pseudo</label>
          <i class="fas fa-user" />
          <input
          type='text' 
          />
          <label>Mot de passe</label>
          <i class="fas fa-lock" />
          <input
          type='password'
          />
          <button type='submit'>C'est parti</button>
        </form>
      </div>
      <div className="access-register-account">
        <button
        type='button'
        onClick={() => history.push('/access-register')}
        >Pas de compte ? C'est ici.</button>
      </div>
    </div>
  );
}
