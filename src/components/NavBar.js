import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{ height: 60, border: "1px solid red" }}
      className="nav-container"
    >
      <NavLink exact to="/" style={{ textDecoration: "none" }}>
        <span style={{ fontSize: 28 }}>🐶</span>
      </NavLink>

      <div>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/schedule">
          <button>Schedule A Dog Walk</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
