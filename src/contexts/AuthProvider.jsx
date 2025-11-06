import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signUp with email password
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    // set observer
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observer from useEffect", currentUser);
      setUser(currentUser);
      setLoading(false);
      // clear observer
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    signUpUser,
    signInUser,
    signInGoogle,
    signOutUser,
    user,
    loading,
  };
  return <AuthContext value={authInfo}> {children} </AuthContext>;
};

export default AuthProvider;
