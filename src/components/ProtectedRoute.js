import React from "react";
import { Redirect } from "react-router-dom";
export default function ProtectedRoute({
  activeUser,
  children,
  path,
  protected,
}) {
  const redirectTo = protected ? "/login" : "/search";

  if ((activeUser && protected) || (!activeUser && !protected)) {
    return (
      <Route path={path}>
        <FavoritesPage
          activeUser={activeUser}
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

// Look up turnary
