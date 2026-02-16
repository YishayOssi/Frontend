import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }){
  const [operator, setOperator] = useState(null); 
  const [token, setToken] = useState(null);       

 
  function login(data, token){
    setOperator(data);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{operator, token, login}}>
      {children}
    </AuthContext.Provider>
  );
};