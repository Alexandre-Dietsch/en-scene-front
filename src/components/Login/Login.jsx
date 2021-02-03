import React from 'react';
import pictures from './loginPictures';

export default function Login() {
  return(
    <div className='login-container'>
      {
        pictures.map(picture => (
          <img key={picture.id} src={picture.picture} alt='' className={picture.cName} />
         ))
      }
      <button type='button' className='login-button'>
        Se connecter
      </button>
      <span>
        Vous n'avez pas de conmpte ? <strong>Inscivez-vous</strong>
      </span>
    </div>
  );
}