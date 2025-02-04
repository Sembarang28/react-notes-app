/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AddNotesForm from "./AddNotesForm";
import NoteList from "./NoteList";

function Body({ archiveNotes, notes, onAddNote, onToggleArchived, onDelete }) {
  return (
    <div className="note-app__body">
      <AddNotesForm onAddNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} onToggleArchived={onToggleArchived} onDelete={onDelete} />
      <h2>Arsip</h2>
      <NoteList notes={archiveNotes} onToggleArchived={onToggleArchived} onDelete={onDelete} />
    </div>
  );
}

export default Body;