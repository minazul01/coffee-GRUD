import { createContext, useEffect, useState } from "react";
import auth from "../Utilis/Auth";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authenticaiion = createContext(null);

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  email password registration
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  // email password login
  const loginEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github login
  const githubProvider = new GithubAuthProvider();
  const loginGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // signOut
  const signOuter = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currenUser) => {
      // console.log(currenUser)
      if (currenUser) {
        // console.log(currenUser)
        setUser(currenUser);
      } else {
        setUser(null);
      }

      setLoading(false);

      return () => {
        unscribe();
      };
    });
  }, []);

  const allContext = {
    user,
    loading,
    registerWithEmail,
    loginEmailPass,
    googleLogin,
    loginGithub,
    signOuter,
  };

  return (
    <authenticaiion.Provider value={allContext}>
      {children}
    </authenticaiion.Provider>
  );
};

export default Authentication;
