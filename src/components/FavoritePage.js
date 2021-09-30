import React, { useState } from "react";
import GifDisplay from "./GifDisplay";
import { deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";
function FavoritesPage({ user, favorites, deleteFavorite }) {
  return (
    <div>
      <div>{user}</div>
      {favorites.map((val) => (
        <GifDisplay
          id={val.id}
          title={val.title}
          url={val.url}
          gifs={val}
          key={val.id}
          isFavorite={true}
          deleteFavorite={deleteFavorite}
        />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,

    favorites: state.favorites,
  };
};
const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

// State - user, search, favorites
// Actions -  deleteFavorite
