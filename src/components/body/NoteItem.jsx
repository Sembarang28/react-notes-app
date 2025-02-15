/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchiveButton";
import { showFormattedDate } from "../../utils";

function NoteItem({ id, title, body, archived, createdAt, onDelete, onToggleArchived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3>{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton id={id} archived={archived} onToggleArchived={onToggleArchived} />
      </div>
    </div>
  );
}

export default NoteItem;