import React from "react";

import HomeScreen from "./HomeScreen";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content-wrap">
        <Router>
          {/* Nav */}
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
