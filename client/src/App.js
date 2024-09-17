import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Index/Child/Navbar.jsx";

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
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
