import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in when app loads
    const checkLoggedIn = async () => {
      try {
        const userJson = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (userJson && token) {
          // Verify token with the backend
          const response = await fetch('http://localhost:5000/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            setCurrentUser(JSON.parse(userJson));
          } else {
            // Token invalid, clear storage
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setCurrentUser(null);
          }
        }
      } catch (error) {
        console.error('Auth verification error:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    checkLoggedIn();
  }, []);

  const login = (userData) => {
    // Store user data and token in localStorage
    localStorage.setItem('user', JSON.stringify({
      id: userData._id,
      name: userData.name,
      email: userData.email,
      username: userData.username
    }));
    localStorage.setItem('token', userData.token);
    
    setCurrentUser({
      id: userData._id,
      name: userData.name,
      email: userData.email,
      username: userData.username
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
