import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './routes/privateRouter';
import 'react-pro-sidebar/dist/css/styles.css';
import Admin_Page from './pages/admin';
import Client_Page from './pages/client';
import LoginPage from './layout/loginPage';
import { NotificationContainer } from 'react-notifications';

const App = () => {
  return <>
    <NotificationContainer />
    <Routes>
      <Route
        exact
        path='/admin'
        element={<PrivateRouter>
          <Admin_Page />
        </PrivateRouter>} />
      <Route
        exact
        path='/client'
        element={
          <Client_Page />
        } />
      <Route
        exact
        path='/login-page'
        element={
          <LoginPage />
        } />

    </Routes>

  </>


};

export default App;