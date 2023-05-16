import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
    return (
      <div>
        <Navbar/>
        <HomePage/>
      </div>
    );
}

export default App;
