import React from "react";

const Search = (props) => {

  const inputHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="search-field">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Type to Search ..."
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;
