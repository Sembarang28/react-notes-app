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
    };

    this.onToggleArchived = this.onToggleArchived.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onSearch = this.onSearch.bind(this);
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
          createdAt: new Date().toISOString(),
        },
      ],
    }));
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

  onSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  getFilteredNotes() {
    const { notes, search } = this.state;
    if (search.trim()) {
      return notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
    } else {
      return notes;
    }
  };

  render() {
    const filteredNotes = this.getFilteredNotes();
    return (
      <>
        <Header search={this.state.search} onSearch={this.onSearch} />
        <Body
          archiveNotes={filteredNotes.filter(item => item.archived)}
          notes={filteredNotes.filter(item => !item.archived)}
          onToggleArchived={this.onToggleArchived}
          onDelete={this.onDelete}
          onAddNote={this.onAddNote}
        />
      </>
    );
  }
}

export default App;