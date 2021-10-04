import React, { useEffect, useState, useRef } from "react";
import useFetch from "../hooks/useFetch";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SET_SEARCH,
} from "../shared/rootReducer";
import GifDisplay from "./GifDisplay";

export default function SearchPage({ user, search, favorites, dispatch }) {
  const [query, setQuery] = useState("");
  const queryRef = useRef(null);

  const { data, error, loading } = useFetch(query);

  useEffect(() => {
    if (data) {
      dispatch({ type: SET_SEARCH, search: data });
    }
  }, [data]);

  return (
    <div>
      <div className="search-field">
        <label htmlFor="searchBar">Search</label>
        <input
          id="search"
          placeholder="Search for Gif"
          ref={queryRef}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setQuery(queryRef.current.value);
            }
          }}
        ></input>
      </div>
      <button onClick={() => setQuery(queryRef.current.value)}>Search</button>

      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {search &&
          !loading &&
          search.map((val) => (
            <GifDisplay
              id={val.id}
              title={val.title}
              url={val.url}
              key={val.id}
              isFavorite={favorites.some((fave) => fave.id === val.id)}
              deleteFavorite={(id) => dispatch({ type: DELETE_FAVORITE, id })}
              addFavorite={(gif) => dispatch({ type: ADD_FAVORITE, gif })}
            />
          ))}
      </div>
    </div>
  );
}
