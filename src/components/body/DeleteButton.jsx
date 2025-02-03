/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function DeleteButton({ id, onDelete }) {
  return <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
}

export default DeleteButton;