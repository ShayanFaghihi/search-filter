import React, { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";

import "./App.css";

import users from "./users.json";

function App() {
  const [usersList, setUsersList] = useState(users);
  const searchHandler = (query) => {
    if (query.length === 0) {
      setUsersList(users);
    } else if (query.length > 0) {
      setUsersList(
        users.filter((user) =>
          user.first_name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      );
    }
  };
  return (
    <section className="container">
      <h1>Search Names from the list below</h1>
      <Search onSearch={searchHandler} />
      <Results users={usersList} />
    </section>
  );
}

export default App;
