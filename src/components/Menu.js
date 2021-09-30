import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <NavLink className="link" to="/login" activeClassName="active">
        Login
      </NavLink>
      <NavLink className="link" to="/search" activeClassName="active">
        Search
      </NavLink>
      <NavLink className="link" to="/favorites" activeClassName="active">
        Favorites
      </NavLink>
    </nav>
  );
}
export default Menu;
