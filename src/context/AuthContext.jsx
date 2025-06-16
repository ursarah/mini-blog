
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext } from 'react';

// hooks
import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [newPost, setNewPost] = useState([
    {
      id: 1,
      titulo: "fgwer",
      descricao: "sfadsf",
      tags: "fawef,afwed",
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/945.png"
    }, {
      id: 2,
      titulo: "sagasd",
      descricao: "sfadsf",
      tags: "fawef,afwed",
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/351.png"
    }, {
      id: 3,
      titulo: "hjert",
      descricao: "sfadsf",
      tags: "fawef,afwed",
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/465.png"
    }, {
      id: 4,
      titulo: "bsfgr",
      descricao: "sfadsf",
      tags: "fawef,afwed",
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/672.png"
    }, {
      id: 5,
      titulo: "rgfsfbvs",
      descricao: "sfadsf",
      tags: "fawef,afwed",
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/532.png"
    }, {
      id: 6,
      titulo: "gerfgerq",
      descricao: "sfadsf",
      tags: "fawef,afwed",
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/729.png"
    },
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