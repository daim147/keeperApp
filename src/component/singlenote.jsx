import React from "react";

export const SingleNote = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.delete(props.item)}>DELETE</button>
      <button onClick={() => props.edit(props.item)}>EDit</button>
    </div>
  );
};
