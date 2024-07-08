import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Project";

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="App">
        <Header />
        <main className="flex justify-center min-h-screen items-center mt-16 cursor-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Project.js" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
