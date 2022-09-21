import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminNavbar from '../Components/admin/AdminNavbar';
import AuthContext from '../context/AuthContext';

const AdminPage = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLoggedIn()) {
      navigate('/');
      return;
    }
  }, [navigate, authCtx]);
  return (
    <>
      {authCtx.isLoggedIn() && (
        <>
          <AdminNavbar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default AdminPage;
