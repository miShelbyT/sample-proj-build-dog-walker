import { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Fallback from "./components/Fallback";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import NewAccount from './components/NewAccount';
import Schedule from "./components/Schedule";

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleUpdateUser = (x) => {
    setCurrentUser(x)
  }
  return (
    <>
      <NavBar currentUser={currentUser} handleUpdateUser={handleUpdateUser}/>

      <Switch>
        <Route path="/login">
          <Login handleUpdateUser={handleUpdateUser}/>
        </Route>

        <Route path="/users/new">
          <NewAccount handleUpdateUser={handleUpdateUser}/>
        </Route>

        <Route path="/about">
          <About currentUser={currentUser}/>
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
    </>
  );
}

export default App;
