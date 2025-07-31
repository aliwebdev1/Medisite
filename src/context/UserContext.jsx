import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
//

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  // create
  const createUserByEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signInUser = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sing out
  const logOut = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  // update
  const updateUser = (name) => {
    setUserLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  // tracking
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUserByEmail,
    signInUser,
    updateUser,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
