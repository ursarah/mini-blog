
import { NavLink } from 'react-router-dom';
import { useContextAuth } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user } = useContextAuth();
  const { logout } = useAuth();
  return (
    <nav>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/">
        Home
      </NavLink>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/sobre">
        Sobre
      </NavLink>
      {user ? (
        <>
          <NavLink className="mx-2 p-1 duration-[.3s]" to="/newpost">
            Novo post
          </NavLink>
          <NavLink className="mx-2 p-1 duration-[.3s]" to="/dashboard">
            Dashboard
          </NavLink>
          <button className="mx-2 p-1 duration-[.3s]" onClick={logout}>
            Sair
          </button>
        </>
      ) : (
        <>
          <NavLink className="mx-2 p-1 duration-[.3s]" to="/login">
            Login
          </NavLink>
          <NavLink className="mx-2 p-1 duration-[.3s]" to="/cadastro">
            Cadastro
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar


