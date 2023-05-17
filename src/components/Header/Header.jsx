import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container mx-auto py-4 flex justify-between shadow-md shadow-[rgba(0, 0, 0, 0.15)]">
      <Link to="/">Mini Blog</Link>
      <Navbar />
    </header>
  );
}

export default Header;
