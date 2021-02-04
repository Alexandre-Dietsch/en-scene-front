import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/ProvideAuth';

export default function Header() {
  const { userConnected } = useContext(authContext);

  console.log(userConnected);

  return(
    <div className="header-container">
      <div className="header-title">
        <Link to='/'>
          <h1>En scène</h1>
        </Link>
      </div>
      <div className="header-profil">
        {
          userConnected.id && <img src={userConnected.picture} alt='profil access' />
        }
      </div>
    </div>
  );
} 