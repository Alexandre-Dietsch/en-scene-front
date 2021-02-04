import React, { useState } from 'react';
import axios from 'axios';

import Register from './Register';

export default function RegisterContainer() {
  const [userInfo, setUserInfo] = useState({
    role: 1,
    pseudo: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });
  const [accountIsCreated, setAccountIsCreated] = useState(false);

  const { role, pseudo, email, password, passwordConfirmation } 
  = userInfo;

  const registerHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/registration', {
      fk_user_role: role,
      pseudo: pseudo,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    })
    .then(res => { 
      setAccountIsCreated(true)
      setUserInfo({ 
        ...userInfo, 
        role: 1, pseudo: '', email: '', password: '', passwordConfirmation: '' 
      }) 
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="creation-account-container">
      <Register
      registerHandler={registerHandler} 
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      />
      { accountIsCreated && <p>Parfait, il ne te reste plus qu'à te connecter</p>}
    </div>
  );
};
