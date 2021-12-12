import logo from "./logo.svg";
import "./App.css";
import Nav from "./Componenets/Nav";
import Home from "./Componenets/Home";
import Login from "./Componenets/Login"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login menu={true} />} />
        <Route path="/home" element={<Home menu={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
