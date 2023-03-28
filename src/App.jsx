import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Buttons from "./components/Buttons";
import Navbars from "./components/Navbars";

// pages
import AllMenu from "./pages/AllMenu";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Shakes from "./pages/Shakes";

function App() {
  // https://ziynatillohmuhammadjonov.github.io/menu-api/db.json
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Buttons />
        <Routes>
          <Route path="/" element={<AllMenu />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/shakes" element={<Shakes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
