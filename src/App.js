// import logo from "./logo.svg";
// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Navbar from "./components/Navbar";
// import About from "./components/About"
// import Projects from "./components/Projects"

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            <Footer />

        </div>
    );
}

export default App;
