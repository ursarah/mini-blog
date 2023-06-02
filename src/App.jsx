import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// hooks
import React, { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';

// Context
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import About from './pages/Sobre/About';
import NewPost from './pages/NewPost/NewPost';
import Dashboard from './pages/Dashboard/Dashboard';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuth();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/cadastro" element={!user ? <Cadastro /> : <Navigate to="/" />} />
            <Route path="/posts/newpost" element={user ? <NewPost /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
