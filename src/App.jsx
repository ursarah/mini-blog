import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// hooks

// Context
import { useContextAuth } from './context/AuthContext';

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

const App = () => {

  const { user, loadingUser } = useContextAuth()

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='min-h-[60vh] max-w-7xl py-10 my-0 mx-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/cadastro" element={!user ? <Cadastro /> : <Navigate to="/" />} />
            <Route path="/posts/newpost" element={user ? <NewPost /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
