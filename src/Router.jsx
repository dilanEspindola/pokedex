import { AuthProvider } from './context/AuthContext';
import { AnimatedRoutes } from './components/AnimatedRoutes';

const Router = () => {
  return (
    <>
      <AuthProvider>
        <AnimatedRoutes />
      </AuthProvider>
    </>
  );
};

export default Router;
