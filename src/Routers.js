import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe, Resume, Portfolio, Contact } from "./Pages/index.js";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
