import React, { useState } from "react";

export default function Home(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Deleted", "warning");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard successfully", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myTextBox"
            rows="8"
            placeholder="Enter your Text here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#252A30" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-outline-warning mx-1 my-1"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-outline-danger mx-1 my-1"
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleCopyText}
          disabled={text.length === 0}
        >
          Copy To Clipboard
        </button>
        <button
          className="btn btn-outline-info mx-1 my-1"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes required to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
