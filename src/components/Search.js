import React from "react";

function Search({ plantSearch, updateSearch}) {

  const onSearch = (e) => {
    updateSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={plantSearch}
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;
