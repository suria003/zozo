import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Nav/Navigation";
import Index from "./Components/Index/Index";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}