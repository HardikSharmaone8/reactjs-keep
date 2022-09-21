import React, { useState } from "react";
import ShowNotes from "./ShowNotes";

var Input = () => {
  //Hooks for display form
  var [hide, setHide] = useState(true);
  var [check, setCheck] = useState(false);
  //Hooks for display data
  var [demoText, setDemoText] = useState({});
  var [getText, setText] = useState([]); //getting data

  //Events for display form
  var inputEvent = (condition) => {
    setCheck(condition);
    setHide(false);
  };

  var inputEvents = (event) => {
    var value = event.target.value;
    var name = event.target.name;

    setDemoText({
      ...demoText,
      [name]: value,
    });
  };

  var submit = () => {
    setText([
      ...getText,
      {
        ...demoText,
      },
    ]);
  };

  //when use click on delete button
  var remove = (index) => {
    console.log("fuinction fclall", index);
    getText.splice(index, 1);
    setText([...getText]);
  };

  return (
    <>
      <div id="form_container">
        {hide && (
          <input
            type="text"
            onClick={() => inputEvent(true)}
            placeholder="write a note.."
          ></input>
        )}
        {check && (
          <div>
            <input
              type="text"
              name="heading"
              placeholder="Write Heading"
              onChange={inputEvents}
            ></input>
            <input
              type="text"
              name="textnote"
              className="text"
              placeholder="Write Note Here.."
              onChange={inputEvents}
            ></input>
            <button type="submit" id="submit" onClick={submit}>
              Submit
            </button>
          </div>
        )}
      </div>
      <div className="show_note_container">
        {getText.map((value, index) => {
          return (
            <ShowNotes
              key={index}
              id={index}
              func={remove}
              heading={value.heading}
              note={value.textnote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Input;
