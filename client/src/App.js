import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Beranda from "./pages/Beranda";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Beranda />
    </Router>
  );
}
