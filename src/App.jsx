import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Meditate from "./pages/Meditate";

import "./index.css";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/meditate" element={<Meditate />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
