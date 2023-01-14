import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Fallback from "./components/Fallback";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/schedule">
          <Schedule />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/*">
          <Fallback />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
