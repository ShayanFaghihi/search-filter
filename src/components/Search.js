import React, { useRef } from "react";

import styles from "./Search.module.css";

const Search = (props) => {
  const searchRef = useRef();

  const inputQueryHandler = () => {
    props.onSearch(searchRef.current.value);
  };
  return (
    <div className={styles["search-field"]}>
      <input
        type="text"
        name="search"
        id="search"
        ref={searchRef}
        placeholder="Type to Search ..."
        onChange={inputQueryHandler}
      />
    </div>
  );
};

export default Search;
