import React from "react";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Note } from "./component/note";
import { CreateForm } from "../src/component/createForm";

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
    searchTerm: {
      title: "",
      content: "",
    },
  };
  // ! Add Notes
  addNotes = (data) => {
    if (data.title === "" || data.content === "") {
      return;
    }
    this.setState((prev) => {
      prev.data.push(data);
      return {
        ...prev,
      };
    });
  };
  // ! Delete specific notes from state
  deleteNotes = (notes) => {
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

    this.setState({
      searchTerm: {
        title: data.title,
        content: data.content,
      },
    });
    const target = document.querySelector("#root form");
    const targetTop = target.offsetTop + target.clientHeight / 2;
    const targetLeft = target.offsetLeft + target.clientWidth / 2;
  };
  //! Change Search Term
  changeSearch = (val) => {
    let name = val.target.name;
    let value = val.target.value;
    this.setState((prev) => {
      prev.searchTerm[name] = value;
      return {
        ...prev,
      };
    });
  };
  // ! Clear Search Term
  clear = () => {
    this.setState({
      searchTerm: {
        title: "",
        content: "",
      },
    });
  };
  //! Render Data into DOM
  render() {
    return (
      <div>
        <Header />
        <CreateForm
          handler={this.addNotes}
          data={this.state.searchTerm}
          inputHandler={this.changeSearch}
          clearInput={this.clear}
        />
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
