import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104" : "white",
  };

  // const [btnText, setBtntext] = useState("Enable White Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border:"1px solid white",
  //     });
  //     setBtntext("Enabe White mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtntext("Enable Dark Mode");
  //   }
  // };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              "Unlock the power of TexUtils – Your go-to app for text
              transformation! Analyze your text with ease through features like
              capitalization, lowercase conversion, and intelligent word
              capitalization, putting you in control of your textual content
              like never before."
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              "TexUtils empowers you with seamless text analysis, and the best
              part? It's completely free to use! Enhance your text effortlessly
              without any cost constraints, making TexUtils the ideal companion
              for all your text transformation needs. Explore the freedom to
              capitalize, lowercase, clear text, and capitalize each word at no
              expense – because powerful text analysis should be accessible to
              everyone!"
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              "TexUtils ensures a hassle-free experience by being compatible
              with a wide range of browsers. Whether you're using Chrome,
              Firefox, Safari, or any other popular browser, TexUtils is
              designed to provide smooth and consistent text analysis across
              platforms. Enjoy the flexibility to enhance your text in the
              browser of your choice, making TexUtils a versatile and accessible
              tool for users everywhere."
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="conatainer my-3">
        <button classNameName=" btn btn-primary my-3" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
