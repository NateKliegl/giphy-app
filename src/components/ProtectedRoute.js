import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
function ProtectedRoute({ user, children, path, protected }) {
  const redirectTo = protected ? "/login" : "/search";

  if ((activeUser && protected) || (!activeUser && !protected)) {
    return (
      <Route path={path}>
        <FavoritesPage
          activeUser={user}
          favorites={favorites}
          deleteFavorite={deleteFavorite}
        />
      </Route>
    );
  } else {
    return <Redirect to={redirectTo}></Redirect>;
  }

  return <div></div>;
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);

// State - user
// Actions - NONE
