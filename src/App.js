import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome/Welcome";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import NavBar from "./Componants/NavBar/NavBar";

import "./App.css"
//background>>>

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
