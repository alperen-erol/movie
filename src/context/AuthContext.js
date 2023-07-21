import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { Navigate, useNavigate } from "react-router-dom";
export const AuthContext = createContext();



const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = ()=>{
    signOut(auth)
  }
  const values = { createUser,signIn,logOut ,currentUser: { displayName: "alpi" } };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
