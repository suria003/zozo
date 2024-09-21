import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Nav/Navigation";
import Footer from "./Components/Footer/Footer";

import Index from "./Components/Index/Index.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Disclaimer from "./Components/Pages/Disclaimer.jsx";
import Privacy from "./Components/Pages/Privacy.jsx";
import Conditions from "./Components/Pages/Conditions.jsx";
import SiteMap from "./Components/Pages/Sitemap.jsx";

import Poster from "./Components/Poster/Poster.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/condition" element={<Conditions />} />
          <Route path="/reach" element={<Contact />} />
          <Route path="/map" element={<SiteMap />} />

          <Route path="/post" element={<Poster />}/>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
