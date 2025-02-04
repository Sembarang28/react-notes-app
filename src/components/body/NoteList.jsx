/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onToggleArchived, onDelete }) {
  if (notes.length) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
            <NoteItem key={note.id} {...note} onToggleArchived={onToggleArchived} onDelete={onDelete} />
          ))
        }
      </div>
    );
  } else {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }
}

export default NoteList;