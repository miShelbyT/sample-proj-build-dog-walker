import { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Fallback from "./components/Fallback";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Schedule from "./components/Schedule";

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleUpdateUser = (x) => {
    setCurrentUser(x)
  }
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/login">
          <Login handleUpdateUser={handleUpdateUser}/>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/schedule">
          <Schedule currentUser={currentUser}/>
        </Route>

        <Route exact path="/">
          <Home currentUser={currentUser}/>
        </Route>

        <Route path="/*">
          <Fallback />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
