import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Index/Child/Navbar.jsx";
import ImageZoom from "./Components/zoom.jsx";
import MoviX from "./Components/Nav/Child/MoviX.jsx";

import Navigation from "./Components/Nav/Navigation";
import Footer from "./Components/Footer/Footer";

import Index from "./Components/Index/Index.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/about" element={<Navbar />}/>

          <Route path="/zoom" element={<ImageZoom />}/>
          <Route path="/moviX" element={<MoviX />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
