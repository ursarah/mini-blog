
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext } from 'react';

// hooks
import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [newPost, setNewPost] = useState([
  ])

  const [user, setUser] = useState(false);
  const { auth } = useAuth();

  const handleRemove = (id) => {
    setNewPost(newPost.filter((post) => post.id !== id))
    console.log(newPost);

  }

  const loadingUser = user === false;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return <AuthContext.Provider value={{ newPost, setNewPost, user, loadingUser, handleRemove }}>{children}</AuthContext.Provider>;
}

export const useContextAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider