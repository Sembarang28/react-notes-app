/* eslint-disable react/prop-types */
import React from "react";

class AddNotesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleCharRemaining: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const input = event.target.value;
    if (input.length <= 50) {
      this.setState(() => ({
        title: input,
        titleCharRemaining: 50 - input.length,
      }));
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter {this.state.titleCharRemaining}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." onChange={this.onTitleChangeEventHandler} required value={this.state.title} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." onChange={this.onBodyChangeEventHandler} required value={this.state.body} />
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default AddNotesForm;