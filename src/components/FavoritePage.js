import React, { useState } from "react";
import GifDisplay from "./GifDisplay";
export default function FavoritesPage({
  activeUser,
  favorites,
  deleteFavorite,
}) {
  return (
    <div>
      <div>{activeUser}</div>
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
