import React, { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [userConnected, setUserConnected] = useState([]);

  return(
    <authContext.Provider value={{ userConnected, setUserConnected }}>
      { children }
    </authContext.Provider>
  );
}