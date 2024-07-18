import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader";
import Background from "./components/background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Preloader />
      <Background />
      <div className="App relative min-h-screen">
        <Header />
        <main className="flex justify-center min-h-screen items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Project.js" element={<Projects />} />
            <Route path="About.js" element={<About />} />
            <Route path="Contact.js" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
