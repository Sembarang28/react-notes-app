/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AddNotesForm from "./AddNotesForm";
import NoteList from "./NoteList";

function Body({ archiveNotes, notes, onAddNote, onArchive, onDelete }) {
  return (
    <div className="note-app__body">
      <AddNotesForm />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} onArchive={onArchive} onDelete={onDelete} />
      <h2>Arsip</h2>
      <NoteList notes={archiveNotes} onArchive={onArchive} onDelete={onDelete} />
    </div>
  )
}

export default Body;