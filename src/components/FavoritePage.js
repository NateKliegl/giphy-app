import React, { useState } from "react";
import GifDisplay from "./GifDisplay";
import { DELETE_FAVORITE } from "../shared/rootReducer";
export default function FavoritesPage({ user, favorites, dispatch }) {
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
          deleteFavorite={(id) => dispatch({ type: DELETE_FAVORITE, id })}
        />
      ))}
    </div>
  );
}
