import React from "react";
import { SingleNote } from "./singlenote";

export const Note = (props) => {
  // console.log(Object.entries(props.notes));
  return (
    <div>
      {props.notes.data.map((notes, i) => (
        <SingleNote
          key={i}
          delete={props.deleteEvent}
          title={notes.title}
          content={notes.content}
          item={i}
          editable={notes.editable}
          edit={props.editEvent}
        />
      ))}
    </div>
  );
};
