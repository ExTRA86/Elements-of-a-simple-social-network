import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../Router';
import Loader from '../Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
