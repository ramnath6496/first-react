import React, { useState } from 'react'

export default function TextUtils(props) {
  const [text, setText] = useState('');

  function changeHandler(event) {
    setText(event.target.value);
  }

  function upperHandler() {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showNotification("The text has been converted to Uppercase...", "success");
  }

  function lowerHandler() {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showNotification("The text has been converted to Lowercase...", "success");
  }

  function capitalHandler() {
    let words = text.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    setText(words.join(' '));
    props.showNotification("The text has been Capitalized...", "success");
  }

  function resetHandler() {
    setText("");
    props.showNotification("The text has been Cleared...", "success");
  }

  function copyHandler() {
    navigator.clipboard.writeText(text);
    props.showNotification("The text has been Copied...", "success");
  }

  function spaceHandler() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showNotification("The extra spaces has been Removed...", "success");
  }

  return (
    <>
      <div className="container my-3">
        <h2 className="fw-bold">Enter some text to analyze:</h2>
        <div className="mb-3">
          <textarea className={`form-control text-bg-${props.mode}`} id="textUtility" rows={10} value={text} onChange={changeHandler} />
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={upperHandler}>Uppercase</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length === 0} onClick={lowerHandler}>Lowercase</button>
        <button className="btn btn-success mx-1 my-1" disabled={text.length === 0} onClick={capitalHandler}>Capitalize</button>
        <button className="btn btn-warning mx-1 my-1" disabled={text.length === 0} onClick={copyHandler}>Copy Text</button>
        <button className="btn btn-info mx-1 my-1" disabled={text.length === 0} onClick={spaceHandler}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length === 0} onClick={resetHandler}>Reset</button>
      </div>
      <div className="container my-3">
        <h3>Word and Character Count</h3>
        <p className="fw-medium">{text.split(' ').filter(str => { return str !== "" }).length} words and {text.length}</p>
        <h3>Preview</h3>
        <div className="mb-3">
          <textarea className={`form-control text-bg-secondary${props.mode === "light" ? "-subtle" : ""}`} rows={10} value={text} disabled />
        </div>
      </div>
    </>
  )
}
