import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import { getInitialData } from "../utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
    }

    this.onToggleArchived = this.onToggleArchived.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date(),
        }
      ]
    }))
  }

  onToggleArchived(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => (
        note.id === id ? { ...note, archived: !note.archived } : note
      )),
    }));
  }

  onDelete(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  render() {
    return (
      <>
        <Header />
        <Body
          archiveNotes={this.state.notes.filter(item => item.archived)}
          notes={this.state.notes.filter(item => !item.archived)}
          onToggleArchived={this.onToggleArchived}
          onDelete={this.onDelete}
          onAddNote={this.onAddNote}
        />
      </>
    );
  }
}

export default App;