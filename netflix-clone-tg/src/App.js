import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          {/* Nav */}
          <Switch>
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
