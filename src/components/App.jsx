import React from "react";
import getData from "../utils/data";
import Header from "./header/Header";
import Body from "./body/Body";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      search: "",
    }
  }

  render() {
    return (
      <>
        <Header />
        <Body archiveNotes={notes.filter()} />
      </>
    );
  }
}

export default App;