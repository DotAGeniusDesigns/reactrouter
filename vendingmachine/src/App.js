import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Chips from "./components/Chips";
import Soda from "./components/Soda";
import Candy from "./components/Candy";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Vending Machine</h1>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
