import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const contextAuth = createContext();

export const useAuth = () => useContext(contextAuth);

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUserState(currentUser);
      setLoading(false);
    });
  });

  return (
    <contextAuth.Provider
      value={{
        createUser,
        loginWithEmailAndPassword,
        userState,
        loading,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};
