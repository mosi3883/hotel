import React from 'react';
import Swal from 'sweetalert2';
export const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  getAuthUser: () => {},
  isLoggedIn: () => {},
});

export const AuthProvider = ({ children }) => {
  const login = async (user, pass) => {
    // window.location.replace('/admin');
    console.log(user, pass);
    const url = 'https://portfoliorecovery.me/wp-json/jwt-auth/v1/token';
    try {
      const res = await fetch(url, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user_name', data.user_display_name);

        setTimeout(() => {
          window.location.replace('/admin');
        }, 1700);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'username or password is wrong!',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
  };

  const getAuthUser = () => {
    return {
      token: localStorage.getItem('token'),
      name: localStorage.getItem('user_name'),
    };
  };

  const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
  };
  return (
    <AuthContext.Provider value={{ login, logout, getAuthUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
