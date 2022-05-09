/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <Link to="/" className="navbar-brand">
      Personal Diary
    </Link>
  </nav>
);

export default NavBar;
