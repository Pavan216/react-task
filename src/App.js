import React from "react";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Signin from "./component/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgetpass from "./component/Forgetpass";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/fpswdd" element={<Forgetpass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
