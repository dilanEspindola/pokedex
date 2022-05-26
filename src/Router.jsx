import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Pokemon } from './pages/Pokemon';

// protectedRoute
import { ProtectedRoutes } from './components/ProtectedRoutes';

const Router = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
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
      </AuthProvider>
    </>
  );
};

export default Router;
