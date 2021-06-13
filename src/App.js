import React from "react";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Note } from "./component/note";
import { CreateForm, update } from "../src/component/createForm";

class App extends React.Component {
  //! Data
  state = {
    data: [
      {
        title: "Heading",
        content: "Content",
        editable: false,
      },
      {
        title: "Heading 2",
        content: "Content 2",
        editable: false,
      },
    ],
  };
  // ! Add Notes
  addNotes = (data) => {
    this.setState((prev) => {
      prev.data.push(data);
      return {
        ...prev,
      };
    });
  };
  // ! Delete specific notes from state
  deleteNotes = (notes) => {
    console.log("YEs UPdates");
    this.setState((prev) => {
      prev.data.splice(notes, 1);
      return {
        ...prev,
      };
    });
  };
  // ! Edit Notes
  editNotes = (index) => {
    this.deleteNotes(index);
    const data = this.state.data[index];
    // CreateForm.update();
    update(data);
    // console.log(data);
  };
  //! Render Data into DOM
  render() {
    return (
      <div>
        <Header />
        <CreateForm handler={this.addNotes} />
        <Note
          deleteEvent={this.deleteNotes}
          notes={this.state}
          editEvent={this.editNotes}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
