import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('zwiggyUser');
    const savedToken = localStorage.getItem('zwiggyToken');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(JSON.parse(savedToken));
    }
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('zwiggyUser');
    localStorage.removeItem('zwiggyToken');
  };

  const saveAuth = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('zwiggyUser', JSON.stringify(userData));
    localStorage.setItem('zwiggyToken', JSON.stringify(authToken));
  };
  return (
    <AuthContext.Provider value={{ user, token, saveAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
