import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Culture from "./pages/Culture";
import Community from "./pages/Community";
import Social from "./pages/Social";
import Posters from "./pages/Posters";
import Mythology from "./pages/Mythology";
import Signup from "./pages/Signup";
import Thanks from "./pages/Thanks";
import Learn from "./pages/Learn";
import Apprentice from "./pages/Apprentice";
import Nests from "./pages/Nests";
import Cooking from "./pages/Cooking";
import Trips from "./pages/Trips";
import References from "./pages/References";

export default function App() {
  return (
    <div className="app-root">
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/community" element={<Community />} />
            <Route path="/social" element={<Social />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/myth" element={<Mythology />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/apprentice" element={<Apprentice />} />
            <Route path="/nests" element={<Nests />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
