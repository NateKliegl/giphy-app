import React from "react";
import { NavLink } from "react-router-dom";
import {
  CLEAR_FAVORITES,
  CLEAR_USER,
  CLEAR_SEARCH,
} from "../shared/rootReducer";

function Menu({ user, dispatch }) {
  return (
    <nav className="menu">
      {!user && (
        <NavLink className="link" to="/login" activeClassName="active">
          Login
        </NavLink>
      )}
      {user && (
        <>
          <NavLink className="link" to="/search" activeClassName="active">
            Search
          </NavLink>
          <NavLink className="link" to="/favorites" activeClassName="active">
            Favorites
          </NavLink>
          <NavLink
            onClick={() => {
              dispatch({ type: CLEAR_FAVORITES });
              dispatch({ type: CLEAR_SEARCH });
              dispatch({ type: CLEAR_USER });
            }}
            className="link"
            to="/login"
            activeClassName="active"
          >
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
}
export default Menu;
