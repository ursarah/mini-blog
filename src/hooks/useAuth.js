import { db } from '../firebase/config';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //Clean up

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancel() {
    if (cancelled) {
      return;
    }
  }

  // Cadastro 
  const createUser = async (data) => {
    checkIfIsCancel();

    setLoading(true);
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(user, {
        displayName: data.displayName,
      });


      setLoading(false);
      return user;
    } catch (error) {

      let systemErrorMessage

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa ter 6 caracteres"
      }
      else if (error.message.includes("email-already")) {

        systemErrorMessage = "E-mail ja cadastrado"
      }
      else {

        systemErrorMessage = "Ocorreu um erro tente novamente"
      }


      setLoading(false);
      setError(systemErrorMessage)
    }

  };
  // Login 
  const login = async (data) => {
    checkIfIsCancel()
    setLoading(true)
    setError(false)
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false);


    } catch (error) {
      let systemErrorMessage

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuario não encontrado"

      }
      else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta"

      }
      else {
        systemErrorMessage = "Ocorreu um erro tente novamente"

      }

      setError(systemErrorMessage)
      setLoading(false);
    }
  }

  // Logout 
  const logout = () => {
    checkIfIsCancel()
    signOut(auth)
  }

  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { auth, createUser, login, logout, error, loading };
};
