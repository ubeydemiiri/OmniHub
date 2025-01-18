import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
  );
}

export default App;