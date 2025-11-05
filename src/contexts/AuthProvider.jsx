import React from "react";
import { AuthContext } from "./AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    signInUser,
  };
  return <AuthContext value={authInfo}> {children} </AuthContext>;
};

export default AuthProvider;
