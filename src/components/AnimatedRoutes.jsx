import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Pokemon } from '../pages/Pokemon';

import { AnimatePresence } from 'framer-motion';

// protectedRoute
import { ProtectedRoutes } from './ProtectedRoutes';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/:pokemon'
          element={
            <ProtectedRoutes>
              <Pokemon />
            </ProtectedRoutes>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
};
