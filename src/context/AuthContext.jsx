import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from 'firebase/auth';

const contextAuth = createContext();

export const useAuth = () => useContext(contextAuth);

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  const cerrarSesion = async () => {
    await signOut(auth);
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
        loginGoogle,
        loginFacebook,
        cerrarSesion,
        userState,
        loading,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};
