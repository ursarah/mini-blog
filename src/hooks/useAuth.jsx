import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //Clean up

  const [cancelled, useCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancel() {
    if (cancelled) {
      return;
    }
  }
};
