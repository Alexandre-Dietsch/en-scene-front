import React, { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [userConnected, setUserConnected] = useState([]);
  console.log('user connected: ', userConnected.connected);

  return(
    <authContext.Provider value={{ userConnected, setUserConnected }}>
      { children }
    </authContext.Provider>
  );
}