import { useState } from "react";
// import React from "react";
// let setData;
// export const update = (data) => {
//   setData = data;
//   console.log(setData);
// };
// export class CreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputText: setData?.title ? setData.title : "",
//       TextAreaText: setData?.content ? setData.content : "",
//     };
//   }

//   //! Clear form data
//   clearData = () => {
//     this.setState({ inputText: "", TextAreaText: "" });
//   };
//   //! Send Data to State
//   sendData = (e) => {
//     e.preventDefault();
//     this.state.inputText &&
//       this.state.TextAreaText &&
//       this.props.handler({
//         title: this.state.inputText,
//         content: this.state.TextAreaText,
//         editable: false,
//       });
//     this.clearData();
//   };
//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             name="title"
//             onChange={(e) => this.setState({ inputText: e.target.value })}
//             placeholder="Title"
//             value={this.state.inputText}
//           />
//           <textarea
//             name="content"
//             className="input"
//             onChange={(e) => this.setState({ TextAreaText: e.target.value })}
//             placeholder="Take a note..."
//             rows="3"
//             value={this.state.TextAreaText}
//           />
//           <button onClick={this.sendData}>Add</button>
//         </form>
//       </div>
//     );
//   }
// }

export const CreateForm = (props) => {
  const [inputText, setInput] = useState("");
  const [TextAreaText, setTextArea] = useState("");

  //! Clear form data
  const clearData = () => {
    setInput("");
    setTextArea("");
  };
  //! Send Data to State
  const sendData = (e) => {
    e.preventDefault();
    props.handler({
      title: inputText,
      content: TextAreaText,
      editable: false,
    });
    clearData();
  };
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Title"
          value={inputText}
        />
        <textarea
          name="content"
          className="input"
          onChange={(e) => setTextArea(e.target.value)}
          placeholder="Take a note..."
          rows="3"
          value={TextAreaText}
        />
        <button onClick={sendData}>Add</button>
      </form>
    </div>
  );
};
