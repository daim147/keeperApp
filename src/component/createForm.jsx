import { useState } from "react";
import React from "react";
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
  let title = props.data.title;
  let content = props.data.content;
  //! Clear form data

  //! Send Data to State
  const sendData = (e) => {
    e.preventDefault();
    props.handler({
      title: title,
      content: content,
      editable: false,
    });
    props.clearInput();
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => props.inputHandler(e)}
        />
        <textarea
          name="content"
          className="input"
          placeholder="Take a note..."
          rows="3"
          onChange={(e) => props.inputHandler(e)}
          value={content}
        />
        <button onClick={sendData}>Add</button>
      </form>
    </div>
  );
};
