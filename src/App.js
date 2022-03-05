import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contactus";
import Student from "./components/student";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="student" element={<Student />}></Route>
        <Route path="contact-us" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
