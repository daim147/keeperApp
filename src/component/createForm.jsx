import { useState } from "react";
import React from "react";
export const CreateForm = (props) => {
  const [bolean, showInput] = useState(false);
  let title = props.data.title;
  let content = props.data.content;
  // ! Check if there is data in props than expand the form
  React.useEffect(() => {
    if (props.data.title !== "") {
      showInput(true);
    }
  });
  //! Send Data to State
  const sendData = (e) => {
    e.preventDefault();
    props.handler({
      title: title,
      content: content,
      editable: false,
    });
    props.clearInput();
    showInput(false);
  };
  return (
    <div>
      <form
        style={{
          height: bolean ? "150px" : "80px",
          transition: "height 1s",
        }}
      >
        <input
          name="title"
          placeholder="Title"
          required
          value={title}
          style={{
            visibility: bolean ? "visible" : "hidden",
            opacity: bolean ? "1" : "0",
            height: bolean ? "40px" : "0px",
            transition: "all 0.5s",
          }}
          onChange={(e) => props.inputHandler(e)}
        />
        <textarea
          name="content"
          className="input"
          required
          placeholder="Take a note..."
          style={{
            height: bolean ? "80px" : "40px",
            transition: "height 1s",
          }}
          onFocus={() => showInput(true)}
          onChange={(e) => props.inputHandler(e)}
          value={content}
        />
        {bolean ? <button onClick={sendData}>Add</button> : null}
      </form>
    </div>
  );
};
