import React, { useState } from 'react';
import axios from 'axios';

import RegisterUser from './RegisterUser';

export default function CreationAccount() {
  const [userInfo, setUserInfo] = useState({
    role: 1,
    pseudo: '',
    email: '',
    password: '',
    passwordConfirmation: ''

  })

  console.log(userInfo)

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
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  return (
    <div className="creation-account-container">
      <RegisterUser 
      registerHandler={registerHandler} 
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      />
    </div>
  );
};
