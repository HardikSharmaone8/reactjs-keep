import React from "react";
import "./index.css";

var ShowNotes = (props) => {
  return (
    <div className="show_note">
      <div className="headings">
        {props.heading}
        <i
          className="fa-solid fa-trash"
          onClick={() => props.func(props.id)}
          style={{ float: "right", color: "red" }}
        ></i>
      </div>
      <div className="notes">{props.note}</div>
    </div>
  );
};

export default ShowNotes;
