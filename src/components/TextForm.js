import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase:", "success");
    // console.log("Uppercase was Clicked");
  };

  let handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase:", "success");
  };

  let handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Has Been Cleared:", "success");
  };

  let handleCaClick = () => {
    var words = text.split(" ");
    console.log(words);

    // Capitalize the first letter of each word
    var capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    console.log(capitalizedWords);

    // Join the words back into a sentence
    setText(capitalizedWords.join(" "));
    props.showAlert("Converted To capitalizedcase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);

    // console.log("onchange");
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#10144a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          convert to upper case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          convert to Lower case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClClick}
        >
          clear case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCaClick}
        >
          capitalized case
        </button>
      </div>
      <div
        className="container my-3" 
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} chracters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing To Preview!"}
        </p>
      </div>
    </>
  );
}
