import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/">
        Home
      </NavLink>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/login">
        Login
      </NavLink>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/cadastro">
        Cadastro
      </NavLink>
      {/* <NavLink className="mx-2 p-1 duration-[.3s]" to="/newpost">
        Novo post
      </NavLink>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="mx-2 p-1 duration-[.3s]" to="/sobre">
        Sobre
      </NavLink> */}
    </nav>
  );
}

export default Navbar;
