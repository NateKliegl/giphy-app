import React, { useState } from "react";

export default function SearchPage(props) {
  const [search, setSearch] = useState("");
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
      <button>Search</button>
    </div>
  );
}
