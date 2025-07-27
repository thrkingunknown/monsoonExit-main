import { useState } from "react";
import Home from "./components/Home";
//Some code missing here!!!
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
