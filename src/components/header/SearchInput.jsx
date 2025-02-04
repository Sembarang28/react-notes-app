/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SearchInput({ search, onSearch }) {
  return (
    <div className="note-search">
      <input onChange={onSearch} value={search} placeholder="Cari catatan ..." />
    </div>
  );
}

export default SearchInput;