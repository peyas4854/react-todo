import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from "./components/include/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
