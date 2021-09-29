import React, { useState } from "react";
import GifDisplay from "./GifDisplay";

export default function SearchPage({
  activeUser,
  favorites,
  addFavorite,
  deleteFavorite,
}) {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  async function callAPI() {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=Cl8TyQDyWS0dzM4QssTsPbwfdb0ypcfy&q=${search}&limit=25&offset=0&rating=pg-13&lang=en`;
      const response = await fetch(url);
      const { data } = await response.json();
      setGifs(() =>
        data.map((gif) => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.original.url,
        }))
      );
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div className="search-field">
        <label htmlFor="searchBar">Search</label>
        <input
          id="search"
          value={search}
          placeholder="Search for Gif"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <button onClick={callAPI}>Search</button>

      <div>
        {gifs.map((val) => (
          <GifDisplay
            id={val.id}
            title={val.title}
            url={val.url}
            gifs={val}
            key={val.id}
            isFavorite={favorites.some((fave) => fave.id === val.id)}
            deleteFavorite={deleteFavorite}
            addFavorite={addFavorite}
          />
        ))}
      </div>
    </div>
  );
}
