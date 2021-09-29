import React from "react";

export default function GifDisplay({
  id,
  title,
  url,
  isFavorite,
  addFavorite,
  deleteFavorite,
}) {
  return (
    <div>
      <h3>
        {id} - {title}
      </h3>
      <img src={url}></img>
      {!isFavorite && (
        <button onClick={() => addFavorite({ id, title, url })}>
          Add Favorite
        </button>
      )}
      {isFavorite && (
        <button onClick={() => deleteFavorite(id)}>Delete Favorite</button>
      )}
    </div>
  );
}
