import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser, clearFavorites, clearSearch } from "../redux/actions";
function Menu({ user, clearFavorites, clearSearch, clearUser }) {
  return (
    <nav className="menu">
      {!user === 0 && (
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
            className="link"
            to="/login"
            activeClassName="active"
            onClick={() => {
              clearUser();
              clearSearch();
              clearFavorites();
            }}
          >
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  clearUser,
  clearFavorites,
  clearSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

// State - user
// Action - clearUser, clearFavorites, clearSearch
