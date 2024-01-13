import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null); // Corrected initialization

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const removeBodyClasses=()=>{
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#032744";
      showAlert("DarkMode Has Been Enabled", "success");
      // document.title = "TextUtils-Dark";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode Has Been Enabled", "success");
      // document.title = "TextUtils-light";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="Textutils" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>

            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter ,Charecter Counter,Capitalize each Word"
                mode={mode}
              />
            </Route>
          </Switch>

          {/* <About />   --> this should be commented */}
        </div>
      </Router>

      {/* <Navbar mode={mode} toggleMode={toggleMode} title="Textutils" />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter Your Text to analyze below"
          mode={mode}
        />
      </div> */}
    </>
  );
}

export default App;
