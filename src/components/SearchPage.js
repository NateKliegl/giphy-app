import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import GifDisplay from "./GifDisplay";

export default function SearchPage({
  activeUser,
  favorites,
  addFavorite,
  deleteFavorite,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const { data, error, loading } = useFetch(search);

  return (
    <div>
      <div className="search-field">
        <label htmlFor="searchBar">Search</label>
        <input
          id="search"
          value={searchInput}
          placeholder="Search for Gif"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setSearch(searchInput);
            }
          }}
        ></input>
      </div>
      <button onClick={() => setSearch(searchInput)}>Search</button>

      <div>
        {data.map((val) => (
          <GifDisplay
            id={val.id}
            title={val.title}
            url={val.url}
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
