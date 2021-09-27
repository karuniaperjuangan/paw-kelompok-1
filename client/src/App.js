import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Beranda from "./pages/Beranda";

import { useDispatch } from "react-redux";
import { getAgendas } from "./actions/agendas";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgendas());
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Beranda />
    </Router>
  );
}
