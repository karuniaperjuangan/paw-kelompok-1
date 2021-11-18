import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Beranda from "./pages/Beranda";
import Contact from "./pages/Contact";

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
      <Switch>
        <Route path='/' exact component={Beranda} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}
