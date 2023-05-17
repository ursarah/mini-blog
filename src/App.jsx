import { Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import NewPost from './pages/NewPost/NewPost';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/Sobre/About';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/newpost" element={<NewPost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sobre" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
