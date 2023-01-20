import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom"

const Button = styled.button`
background-color: ${props => props.login ? "green" : "purple"};
color: aliceblue;
padding: 8px;
margin: 1px;
border-radius: 5px;
cursor: pointer;
font-family: inherit;
font-size: 18px;
`

function NavBar({currentUser, handleUpdateUser}) {

  const history = useHistory()

  function handleLogOut() {
    handleUpdateUser(null)
    history.push("/")
  }


  return (
    <nav
      style={{ height: 60, borderBottom: "1px solid red" }}
      className="nav-container"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <span style={{ fontSize: 20 }}><h1>🐶 Dog Walkers R Us</h1></span>
      </Link>

      <div>
       {currentUser ? <Button login onClick={handleLogOut}>Logout</Button> : <NavLink to="/login">
          <Button login>Login</Button>
        </NavLink>
        }
        {currentUser && <NavLink to="/schedule">
          <Button>Schedule A Dog Walk</Button>
        </NavLink>}
        <NavLink to="/about">
          <Button>About</Button>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
