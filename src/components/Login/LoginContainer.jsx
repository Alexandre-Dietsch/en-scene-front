import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../../contexts/ProvideAuth';
import axios from 'axios';

import Login from './Login';

export default function LoginContainer() {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;
  const history = useHistory();
  const { setUserConnected } = useContext(authContext);

  const loginHandler = (e) => {
    e.preventDefault();
    const connectionAttempt = async () => {
      try {
        const res = await axios.post(`http://localhost:5000/api/login`, {
          email: email,
          password: password,
        })
        setUserConnected(res.data)
        history.push('/');

      } catch(error) {
        console.log(new Date(), error.message)
      }
    }
    connectionAttempt();
  }

  return(
    <div className="login-container">
        <Login 
          userCredentials={userCredentials} 
          setUserCredentials={setUserCredentials} 
          loginHandler={loginHandler}
        />
    </div>

  );
}