import React, { useState } from "react";
import Search from "./components/Search";
import JSONData from "./MOCK_DATA.json";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const searchHandler = (value) => {
    setQuery(value);
  };
  return (
    <section className="container">
      <Search onSearch={searchHandler} />
      <div className="results">
        <ul className="results__list">
          {JSONData.filter((user) =>
            user.first_name
              .toLocaleLowerCase()
              .includes(query.toLocaleLowerCase())
          ).map((user, key) => (
            <li className="results__item" key={key}>
              {user.first_name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
