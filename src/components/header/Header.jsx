/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchInput from "./SearchInput";

function Header({ search, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchInput search={search} onSearch={onSearch} />
    </div>
  );
}

export default Header;