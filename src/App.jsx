import React, { useEffect } from "react";
import "./App.css";
import "./Components/Component Styles/Ipad.css";
import "./Components/Component Styles/Mobile.css";
import Main from "./Components/Main";

function App() {
  useEffect(() => {
    const uri = window.location.href;
    if (uri.split("#")[1] === "resume") {
      window.location.href =
        "https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/mohit_2021.pdf?alt=media&token=62c7257c-5d58-4bfd-b428-c68589bdb308";
    }
  }, []);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
