/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function ArchivedButton({ id, archived, onArchive }) {
  return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{archived ? "Pindahkan" : "Arsipkan"}</button>
}

export default ArchivedButton;