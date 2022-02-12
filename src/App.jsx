import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/Component Styles/Ipad.css";
import "./Components/Component Styles/Mobile.css";
import Main from "./Components/Main";
import Redirect from "./Components/Redirect";

function App() {
  useEffect(() => {
    const uri = window.location.href;
    if (uri.split("#")[1] === "resume") {
      window.location.href =
        "https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/mohit_2021.pdf?alt=media&token=62c7257c-5d58-4bfd-b428-c68589bdb308";
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route
          path="v1"
          element={
            <div className="App">
              <Main />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
