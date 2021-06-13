import React from "react";

export const SingleNote = (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={(e) => props.delete(props.item)}>DELETE</button>
    <button onClick={(e) => props.edit(props.item)}>EDit</button>
  </div>
);
